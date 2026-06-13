import { storeInfo } from "../config/brand";
import { SectionHeader } from "../components/SectionHeader";

export function Contact() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Questions about a flavor or device?"
            description="Send a message through the UI-only form or use the contact details below. This static site does not submit data to a backend."
          />

          <form className="premium-card mt-10 grid gap-5 rounded-[2rem] p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-300">First Name</span>
                <input
                  className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-amber-300"
                  placeholder="Alex"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-300">Last Name</span>
                <input
                  className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-amber-300"
                  placeholder="Morgan"
                />
              </label>
            </div>
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-300">Email</span>
              <input
                type="email"
                className="h-12 w-full rounded-full border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-amber-300"
                placeholder="you@example.com"
              />
            </label>
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-300">Message</span>
              <textarea
                rows={6}
                className="w-full rounded-[1.5rem] border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-amber-300"
                placeholder="Tell us what you are looking for..."
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-amber-500 to-lime-500 px-8 py-4 font-bold text-black transition hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="premium-card rounded-[2rem] p-7">
            <h2 className="text-2xl font-black text-white">Store Details</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <p>
                <span className="block text-sm uppercase tracking-[0.24em] text-slate-500">Email</span>
                {storeInfo.email}
              </p>
              <p>
                <span className="block text-sm uppercase tracking-[0.24em] text-slate-500">Phone</span>
                {storeInfo.phone}
              </p>
              <p>
                <span className="block text-sm uppercase tracking-[0.24em] text-slate-500">Address</span>
                {storeInfo.address}
              </p>
            </div>
          </div>

          <div className="premium-card flex min-h-80 items-center justify-center rounded-[2rem] p-8 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">
                Google Maps
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">Embed Placeholder</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Replace this panel with an iframe embed for your retail location.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
