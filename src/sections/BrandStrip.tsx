import { brands } from "../data/siteData";

export function BrandStrip() {
  return (
    <section className="border-y border-white/10 bg-black/35">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Featured Brands
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap">
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-center text-sm font-bold text-slate-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
