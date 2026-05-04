import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">ShopEase</p>
          <p className="mt-2 text-sm text-slate-400">A modern shopping experience built with React.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link className="transition hover:text-white" to="/">Home</Link>
          <Link className="transition hover:text-white" to="/shop">Shop</Link>
          <Link className="transition hover:text-white" to="/about">About</Link>
          <Link className="transition hover:text-white" to="/project">Project</Link>
          <Link className="transition hover:text-white" to="/cart">Cart</Link>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
