import { ProductGrid } from "../components/ProductGrid";
import { SectionHeader } from "../components/SectionHeader";
import { productCatalog } from "../lib/products";

export function NewArrivals() {
  const newArrivals = productCatalog.filter((product) => product.newArrival);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="New Arrivals"
          title="Latest premium drops."
          description="Freshly added disposables, pod systems, and nicotine alternatives ready for discovery."
        />
        <div className="mt-10">
          <ProductGrid products={newArrivals} />
        </div>
      </section>
    </main>
  );
}
