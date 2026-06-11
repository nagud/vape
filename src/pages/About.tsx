import { storeInfo } from "../config/brand";
import { SectionHeader } from "../components/SectionHeader";

const reasons = [
  {
    title: "Curated Premium Selection",
    description: "We spotlight trusted brands, refined flavors, and products with clear specifications.",
  },
  {
    title: "Fast Static Experience",
    description: "The storefront is lightweight, responsive, and built for quick browsing on every screen.",
  },
  {
    title: "Flavor-First Guidance",
    description: "Every card surfaces flavor, puff count, price, and format details to simplify comparison.",
  },
];

export function About() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About Us"
            title="A modern smoke shop for premium discovery."
            description={`${storeInfo.name} blends luxury retail design with practical product clarity. The site presents cigars, tobacco, vape juice, Geek Bar devices, hookah, kratom, CBD, cigarettes, and accessories in a polished dark experience.`}
          />
          <div className="premium-card rounded-[2.5rem] p-8 sm:p-10">
            <h2 className="text-2xl font-black text-white">Our Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              To make smoke shop browsing feel simple, transparent, and elevated by combining
              tasteful design with useful product data, responsive navigation, and effortless
              discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Built around confidence and clarity."
            description="Every page is designed to help adult consumers browse products quickly while still feeling premium."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <article key={reason.title} className="premium-card rounded-[2rem] p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-white">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
