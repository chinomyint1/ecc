import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import  CartContext  from "../context/CartContext";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <p className="text-slate-600">Product not found.</p>
        <Link className="text-blue-600 hover:underline" to="/">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <img src={product.image} alt={product.name} className="rounded-3xl object-cover" />
        <div className="space-y-6 rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm shadow-slate-950/20">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Product details</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">{product.name}</h1>
            <p className="mt-4 text-xl text-slate-300">${product.price}</p>
          </div>

          <p className="text-slate-300">
            This is a stylish and comfortable product designed for everyday wear. Add it to your cart and continue shopping for more favorites.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <Link className="inline-flex text-sm text-blue-400 transition hover:text-blue-200" to="/">
            ← Back to catalog
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
