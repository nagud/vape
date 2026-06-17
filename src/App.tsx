import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Categories } from "./pages/Categories";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NewArrivals } from "./pages/NewArrivals";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";

export function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
