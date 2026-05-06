import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import CartContext from "../context/CartContext";
import { products } from "../data/products";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-8 py-10 text-white shadow-xl shadow-slate-950/40 sm:px-12">
        <h1 className="text-4xl font-semibold sm:text-5xl">Shop all products</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
         .
        </p>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-white">Catalog</h2>
          <p className="text-sm text-slate-400">{products.length} products available</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Shop;
