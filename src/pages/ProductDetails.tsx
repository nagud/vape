import { Link, useParams } from "react-router-dom";
import { ProductGrid } from "../components/ProductGrid";
import { SectionHeader } from "../components/SectionHeader";
import { formatPrice, formatPuffs, getProductById, productCatalog } from "../lib/products";

export function ProductDetails() {
  const params = useParams();
  const productId = Number(params.id);
  const product = getProductById(productId);

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
          Product Not Found
        </p>
        <h1 className="mt-4 text-4xl font-black text-white">This product is no longer available.</h1>
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-cyan-200"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  const relatedProducts = productCatalog
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <div className="premium-card rounded-[2.5rem] p-5">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {["Device", "Flavor", "Specs"].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 text-sm font-bold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
            {product.brand}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{product.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-400">Flavor</p>
              <p className="mt-2 font-bold text-white">{product.flavor}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-400">Puff Count</p>
              <p className="mt-2 font-bold text-white">{formatPuffs(product.puffs)}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-400">Category</p>
              <p className="mt-2 font-bold text-white">{product.category}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-black/35 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-400">Price</p>
              <p className="text-4xl font-black text-white">{formatPrice(product.price)}</p>
            </div>
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 font-bold text-white transition hover:scale-[1.02]"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-black text-white">Specifications</h2>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <dt className="text-sm capitalize text-slate-400">{key}</dt>
                  <dd className="mt-2 font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Related Products"
          title="More from this category."
          description={`Explore other premium options in ${product.category}.`}
        />
        <div className="mt-10">
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </main>
  );
}
