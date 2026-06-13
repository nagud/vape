import { storeInfo } from "../config/brand";

export function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="premium-card noise-overlay overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-14">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">
              Members Only Drops
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Get new flavors before they sell out.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Join the {storeInfo.shortName} list for launch alerts, limited bundle previews, and curated product
              picks from our vape specialists.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="min-h-14 flex-1 rounded-full border border-white/10 bg-black/40 px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
            />
            <button
              type="submit"
              className="min-h-14 rounded-full bg-gradient-to-r from-amber-500 to-lime-500 px-8 font-bold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
