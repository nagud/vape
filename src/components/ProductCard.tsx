import { Link } from "react-router-dom";
import { formatPrice, formatPuffs } from "../lib/products";
import type { Product } from "../types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group premium-card relative flex h-full flex-col overflow-hidden rounded-[2rem] p-4 transition duration-300 hover:-translate-y-2 hover:border-amber-300/40 hover:shadow-amber-500/10">
      {product.newArrival ? (
        <span className="absolute right-5 top-5 z-10 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
          New
        </span>
      ) : null}
      <Link to={`/products/${product.id}`} className="block overflow-hidden rounded-[1.5rem] bg-black/30">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-200">
            {product.brand}
          </p>
          <p className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
            {formatPuffs(product.puffs)}
          </p>
        </div>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-bold text-white transition group-hover:text-amber-200">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-slate-400">{product.flavor}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className="text-2xl font-black text-white">{formatPrice(product.price)}</p>
          <Link
            to={`/products/${product.id}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-200"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
