function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-700 bg-slate-900 p-4 shadow-sm shadow-slate-950/20">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
        <div>
          <h3 className="font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-slate-400">${item.price}</p>
        </div>
      </div>
      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
        Qty 1
      </span>
    </div>
  );
}

export default CartItem;
