function Project() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-950/30">
        <h1 className="text-4xl font-semibold text-white">Our Project</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project demonstrates a clean e-commerce layout with product browsing, cart management, and app navigation built with React, React Router, and Tailwind CSS.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Built with</h2>
            <p className="mt-3 text-slate-300">
              React, React Router DOM, Tailwind CSS, and a custom cart context make the shopping experience smooth and interactive.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">What you can do</h2>
            <p className="mt-3 text-slate-300">
              Browse products, view details, add items to the cart, and navigate between home, about, cart, and project pages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
