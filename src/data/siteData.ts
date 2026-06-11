import type { Category, Testimonial } from "../types";

export const categories: Category[] = [
  {
    name: "Disposable Vapes",
    description: "Premium ready-to-use devices with high puff counts and vibrant flavor profiles.",
    image: "/images/vape-gradient.svg",
    accent: "from-violet-500 to-cyan-400",
  },
  {
    name: "Pod Systems",
    description: "Refillable performance kits with sleek builds, precise airflow, and compact power.",
    image: "/images/vape-gradient.svg",
    accent: "from-blue-500 to-violet-500",
  },
  {
    name: "E-Liquids",
    description: "Curated nicotine salts and freebase blends for smooth, expressive vapor.",
    image: "/images/vape-gradient.svg",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Nicotine Pouches",
    description: "Discreet smoke-free options with polished flavors and travel-friendly tins.",
    image: "/images/vape-gradient.svg",
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    name: "Accessories",
    description: "Cases, chargers, coils, pods, and essentials for a refined vape setup.",
    image: "/images/vape-gradient.svg",
    accent: "from-sky-400 to-indigo-500",
  },
];

export const brands = ["Elf Bar", "Geek Bar", "Lost Mary", "Raz Vape", "Flum", "Hyde"];

export const testimonials: Testimonial[] = [
  {
    name: "Maya R.",
    location: "Austin, TX",
    quote:
      "The product curation feels premium, the flavors are easy to compare, and the whole shopping experience is beautifully simple.",
    rating: 5,
  },
  {
    name: "Dante K.",
    location: "Phoenix, AZ",
    quote:
      "I found my favorite Geek Bar in seconds. The filters make the catalog feel like a luxury storefront instead of a warehouse.",
    rating: 5,
  },
  {
    name: "Sophia L.",
    location: "Miami, FL",
    quote:
      "Clean design, clear specs, and no clutter. Vape Lot has become my go-to place to discover new arrivals.",
    rating: 5,
  },
];
