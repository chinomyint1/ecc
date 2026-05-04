import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-600">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 h-52 w-full rounded-2xl object-cover"
        />
      </Link>
      <div className="space-y-2">
        <div>
          <h2 className="text-lg font-semibold text-white">{product.name}</h2>
          <p className="text-sm text-slate-400">${product.price}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
