import { CategoryCard } from "../components/CategoryCard";
import { SectionHeader } from "../components/SectionHeader";
import { categories } from "../data/siteData";

export function Categories() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Categories"
          title="Shop every vape format."
          description="Choose from disposables, pod systems, e-liquids, nicotine pouches, and refined accessories."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
