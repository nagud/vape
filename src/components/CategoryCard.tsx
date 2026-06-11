import { Link } from "react-router-dom";
import type { Category } from "../types";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="group premium-card relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/25"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accent}`}
        aria-hidden="true"
      />
      <div className="relative z-10 flex items-start gap-5">
        <img
          src={category.image}
          alt=""
          className="h-20 w-20 rounded-3xl object-cover ring-1 ring-white/10 transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div>
          <h3 className="text-2xl font-black text-white">{category.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
