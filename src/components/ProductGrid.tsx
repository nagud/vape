import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  emptyMessage?: string;
};

export function ProductGrid({
  products,
  emptyMessage = "No products match your current filters.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="premium-card rounded-[2rem] p-10 text-center text-slate-300">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
