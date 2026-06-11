export type CategoryName =
  | "Disposable Vapes"
  | "Pod Systems"
  | "E-Liquids"
  | "Nicotine Pouches"
  | "Accessories";

export type Product = {
  id: number;
  name: string;
  brand: string;
  category: CategoryName;
  flavor: string;
  puffs: number;
  price: number;
  newArrival: boolean;
  featured: boolean;
  bestSeller: boolean;
  image: string;
  description: string;
  specifications: {
    battery: string;
    nicotine: string;
    capacity: string;
    charging: string;
  };
};

export type Category = {
  name: CategoryName;
  description: string;
  image: string;
  accent: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};
