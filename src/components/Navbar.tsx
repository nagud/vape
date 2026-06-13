import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { storeInfo } from "../config/brand";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? "bg-white text-black" : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src="/images/vape-lot-logo.svg"
            alt=""
            className="h-11 w-11 rounded-2xl glow-ring"
          />
          <span className="max-w-[12rem] text-base font-black leading-tight tracking-tight text-white sm:max-w-none sm:text-xl">
            {storeInfo.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/products"
          className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105 lg:inline-flex"
        >
          Shop Now
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="text-2xl leading-none">{isOpen ? "x" : "="}</span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/95 px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
