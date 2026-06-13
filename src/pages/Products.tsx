import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductGrid } from "../components/ProductGrid";
import { SectionHeader } from "../components/SectionHeader";
import { categories } from "../data/siteData";
import { getBrands, productCatalog } from "../lib/products";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Puff Count", value: "puffs" },
  { label: "Newest", value: "new" },
];

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "All";
  const brand = searchParams.get("brand") ?? "All";
  const sort = searchParams.get("sort") ?? "featured";
  const brands = getBrands();

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "All") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return productCatalog
      .filter((product) => {
        const matchesSearch =
          !normalizedSearch ||
          [product.name, product.brand, product.flavor, product.category]
            .join(" ")
            .toLowerCase()
            .includes(normalizedSearch);
        const matchesCategory = category === "All" || product.category === category;
        const matchesBrand = brand === "All" || product.brand === brand;

        return matchesSearch && matchesCategory && matchesBrand;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "puffs":
            return b.puffs - a.puffs;
          case "new":
            return Number(b.newArrival) - Number(a.newArrival);
          case "featured":
          default:
            return Number(b.featured) - Number(a.featured) || Number(b.bestSeller) - Number(a.bestSeller);
        }
      });
  }, [brand, category, search, sort]);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Catalog"
          title="Search premium vape products."
          description="Filter by category, brand, and sort preference to compare flavors, puff counts, and prices."
        />

        <div className="premium-card mt-10 grid gap-4 rounded-[2rem] p-5 md:grid-cols-2 xl:grid-cols-4">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-300">Search</span>
            <input
              type="search"
              value={search}
              onChange={(event) => updateParam("search", event.target.value)}
              placeholder="Flavor, product, brand..."
              className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-300">Category</span>
            <select
              value={category}
              onChange={(event) => updateParam("category", event.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-amber-300"
            >
              <option>All</option>
              {categories.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-300">Brand</span>
            <select
              value={brand}
              onChange={(event) => updateParam("brand", event.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-amber-300"
            >
              <option>All</option>
              {brands.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-300">Sort</span>
            <select
              value={sort}
              onChange={(event) => updateParam("sort", event.target.value)}
              className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-amber-300"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
          <p>{filteredProducts.length} products found</p>
          <button
            type="button"
            className="rounded-full border border-white/10 px-4 py-2 font-semibold text-slate-300 transition hover:border-amber-300 hover:text-amber-200"
            onClick={() => setSearchParams({})}
          >
            Clear Filters
          </button>
        </div>

        <div className="mt-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </main>
  );
}
