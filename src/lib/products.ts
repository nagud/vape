import products from "../data/products.json";
import type { CategoryName, Product } from "../types";

export const productCatalog = products as Product[];

export const getBrands = () =>
  Array.from(new Set(productCatalog.map((product) => product.brand))).sort();

export const getCategories = () =>
  Array.from(new Set(productCatalog.map((product) => product.category))).sort() as CategoryName[];

export const getProductById = (id: number) =>
  productCatalog.find((product) => product.id === id);

export const formatPuffs = (puffs: number) =>
  puffs > 0 ? `${puffs.toLocaleString()} puffs` : "Refillable";

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
