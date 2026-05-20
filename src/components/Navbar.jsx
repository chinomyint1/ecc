import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";


function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-20 bg-slate-900 border-b border-slate-700 shadow-sm shadow-slate-950/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="text-xl font-semibold text-white">
          p-shop
        </Link>

        <nav className="flex items-center gap-4 text-slate-200">
          <Link className="transition hover:text-white" to="/">
            Home
          </Link>
          <Link className="transition hover:text-white" to="/shop">
            Shop
          </Link>
          <Link className="transition hover:text-white" to="/blog">
            Blog
          </Link>
          <Link className="transition hover:text-white" to="/about">
            About
          </Link>
          <Link className="transition hover:text-white" to="/project">
            Project
          </Link>
          <Link className="transition hover:text-white" to="/cart">
            Cart ({cart.length})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
