import { Link } from "react-router-dom";
import { storeInfo } from "../config/brand";
import heroProducts from "../data/products.json";
import { formatPuffs } from "../lib/products";
import type { Product } from "../types";

const showcaseProduct = (heroProducts as Product[]).find((product) => product.featured) ?? (heroProducts as Product[])[0];

export function HeroBanner() {
  return (
    <section className="noise-overlay relative overflow-hidden">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="relative z-10 flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            Premium drops live now
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {storeInfo.name} for <span className="gradient-text">premium smoke essentials</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {storeInfo.tagline} Browse premium disposables, pod systems, e-liquids, pouches, and
            accessories in a sleek dark storefront built for fast browsing.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/products"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-4 text-center font-bold text-white transition hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Shop Products
            </Link>
            <Link
              to="/new-arrivals"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              View New Arrivals
            </Link>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["10+", "Curated products"],
              ["5", "Shop categories"],
              ["24/7", "Static fast site"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="premium-card glow-ring relative mx-auto max-w-lg rounded-[3rem] p-5">
            <div className="absolute -right-6 top-10 rounded-full border border-violet-300/30 bg-violet-500/20 px-4 py-2 text-sm font-bold text-violet-100 backdrop-blur">
              Save on bundles
            </div>
            <img
              src={showcaseProduct.image}
              alt={showcaseProduct.name}
              className="aspect-square rounded-[2.3rem] object-cover"
            />
            <div className="mt-5 rounded-[2rem] border border-white/10 bg-black/45 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Featured Device
              </p>
              <div className="mt-3 flex items-end justify-between gap-5">
                <div>
                  <h2 className="text-2xl font-black text-white">{showcaseProduct.name}</h2>
                  <p className="mt-1 text-slate-400">
                    {showcaseProduct.flavor} / {formatPuffs(showcaseProduct.puffs)}
                  </p>
                </div>
                <Link
                  to={`/products/${showcaseProduct.id}`}
                  className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-200"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
