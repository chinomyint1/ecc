import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import CartContext from "../context/CartContext";
import { products } from "../data/products";

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <section className="relative mb-10 overflow-hidden rounded-3xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="src/assets/videoplayback.mp4"
            type="video/mp4"
          />
          
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative mx-auto max-w-4xl px-8 py-24 text-center text-white sm:px-12 sm:py-28">
          <h1 className="text-4xl font-semibold sm:text-5xl">Discover your next favorite clothing</h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-slate-200 sm:text-lg">
           Find the perfect piece to complete your look.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-3xl bg-slate-900 p-8 shadow-sm shadow-slate-950/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured products</h2>
            <p className="text-sm text-slate-400">{products.length} items available</p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            shop
          </Link>
        </div>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
