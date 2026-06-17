import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { assetPath } from "../lib/assets";
import { formatPrice, productCatalog } from "../lib/products";

const slides = [
  {
    eyebrow: "Best-Selling Bundles & Kits",
    title: "Save on customer-favorite smoke shop bundles.",
    description:
      "Bundle premium disposables, accessories, and everyday essentials for a polished setup inspired by top vaporizer retailers.",
    cta: "View Best Sellers",
    href: "/products?sort=featured",
    filter: "bestSeller",
    badge: "Bundle & Save",
    accent: "from-cyan-500/20 via-violet-500/10 to-blue-500/10",
  },
  {
    eyebrow: "Chosen by Vape Lot Experts",
    title: "Hand-picked devices with trusted flavor performance.",
    description:
      "Explore staff-style favorites with clear specs, strong puff counts, and premium brand recognition.",
    cta: "Shop Expert Picks",
    href: "/products",
    filter: "featured",
    badge: "Expert Picks",
    accent: "from-violet-500/20 via-cyan-500/10 to-slate-500/10",
  },
  {
    eyebrow: "Just Dropped",
    title: "Fresh arrivals for your next smooth session.",
    description:
      "Browse the newest disposables, pod systems, pouches, and accessories added to the Vape Lot catalog.",
    cta: "See New Arrivals",
    href: "/new-arrivals",
    filter: "newArrival",
    badge: "New Drops",
    accent: "from-fuchsia-500/20 via-blue-500/10 to-cyan-500/10",
  },
] as const;

export function HomeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const slideProducts = useMemo(
    () =>
      productCatalog
        .filter((product) => product[activeSlide.filter])
        .slice(0, 3),
    [activeSlide],
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-label="Featured promotions">
      <div
        className={`premium-card noise-overlay relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${activeSlide.accent} p-6 sm:p-8 lg:p-10`}
      >
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div aria-live="polite">
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">
              {activeSlide.badge}
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              {activeSlide.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {activeSlide.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {activeSlide.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to={activeSlide.href}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 text-center font-bold text-white transition hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/25"
              >
                {activeSlide.cta}
              </Link>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                  aria-label="Previous promotion"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                  aria-label="Next promotion"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-7 flex gap-2" aria-label="Promotion slide selector">
              {slides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex ? "w-10 bg-cyan-300" : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Show ${slide.eyebrow}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {slideProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group rounded-[2rem] border border-white/10 bg-black/35 p-4 transition hover:-translate-y-2 hover:border-cyan-300/40"
              >
                <img
                  src={assetPath(product.image)}
                  alt={product.name}
                  className="aspect-square rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
                  {product.brand}
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{product.flavor}</p>
                <p className="mt-4 text-xl font-black text-cyan-200">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
