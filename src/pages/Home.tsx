import { Link } from "react-router-dom";
import { BrandStrip } from "../sections/BrandStrip";
import { CategoryCard } from "../components/CategoryCard";
import { HeroBanner } from "../components/HeroBanner";
import { Newsletter } from "../components/Newsletter";
import { ProductGrid } from "../components/ProductGrid";
import { SectionHeader } from "../components/SectionHeader";
import { TestimonialCard } from "../components/TestimonialCard";
import { categories, testimonials } from "../data/siteData";
import { productCatalog } from "../lib/products";

export function Home() {
  const featuredProducts = productCatalog.filter((product) => product.featured).slice(0, 6);
  const newArrivals = productCatalog.filter((product) => product.newArrival).slice(0, 3);
  const bestSellers = productCatalog.filter((product) => product.bestSeller).slice(0, 3);

  return (
    <>
      <HeroBanner />
      <BrandStrip />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Featured Products"
            title="Premium picks for polished sessions."
            description="Explore curated favorites with standout flavors, elevated hardware, and clear specs."
          />
          <Link
            to="/products"
            className="w-fit rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-amber-300 hover:bg-white/10"
          >
            View All Products
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="New Arrivals"
              title="Fresh flavors just landed."
              description="Stay ahead of the latest disposable drops, pod kits, and smoke-free alternatives."
            />
            <Link
              to="/new-arrivals"
              className="w-fit rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-amber-200"
            >
              See New Drops
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Shop by Category"
          title="Find your perfect format."
          description="Browse disposables, refillable kits, e-liquids, pouches, and essential accessories."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Best Sellers"
          title="Customer-favorite vape essentials."
          description="High-demand products selected for flavor clarity, consistency, and sleek design."
        />
        <div className="mt-10">
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by flavor chasers."
            description="A modern shopping experience built around clarity, speed, and premium curation."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
