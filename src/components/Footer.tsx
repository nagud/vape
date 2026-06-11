import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-white">
              N
            </span>
            <span className="text-xl font-black tracking-tight text-white">Nebula Vape Co.</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Premium vape essentials, curated flavors, and modern devices in a fast, static shopping
            experience.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-300">Explore</h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-sm text-slate-400 transition hover:text-cyan-200" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-300">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-slate-400">
            <p>Email: hello@nebulavape.example</p>
            <p>Phone: (555) 014-9088</p>
            <p>Address: 420 Vapor Ave, Suite 8, Las Vegas, NV</p>
          </address>
          <div className="mt-6 flex gap-3" aria-label="Social links">
            {["Instagram", "TikTok", "X"].map((social) => (
              <a
                key={social}
                href="#"
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        Copyright 2026 Nebula Vape Co. For adult nicotine consumers only.
      </div>
    </footer>
  );
}
