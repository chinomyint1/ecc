import { useContext } from "react";
import CartContext  from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-semibold text-white">Your Cart</h1>
      <p className="mt-2 text-sm text-slate-400">Review items before checkout.</p>

      {cart.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center text-slate-400 shadow-sm shadow-slate-950/20">
          Your cart is empty. Add some items from the home page.
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {cart.map((item, index) => (
            <CartItem key={`${item.id}-${index}`} item={item} />
          ))}
          <div className="flex items-center justify-between rounded-3xl bg-slate-900 px-6 py-5 text-white shadow-sm">
            <span className="text-lg font-medium">Total</span>
            <span className="text-xl font-semibold">${total}</span>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
