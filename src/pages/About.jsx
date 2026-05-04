function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-950/30">
        <h1 className="text-4xl font-semibold text-white">About ShopEase</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          ShopEase was built to make shopping simple, safe, and enjoyable. We curate quality products for everyday life and help customers find their next favorite item with ease.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Our mission</h2>
            <p className="mt-3 text-slate-300">
              We believe discovering great products should be fast and fun. Every item is selected to bring value, style, and confidence to your cart.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Why choose us</h2>
            <p className="mt-3 text-slate-300">
              From thoughtful product details to a smooth checkout experience, ShopEase aims to make online shopping feel effortless.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
