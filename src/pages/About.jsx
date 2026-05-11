function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-950/30">
        <h1 className="text-4xl font-semibold text-white"> om os P-shop</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          det er en online butik. vi laver tøj med god kvalitet og vi laver tøj efter hvad du ønsker.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Our mission</h2>
            <p className="mt-3 text-slate-300">
              Vi laver tøj som har et billede eller en design som du ønsker.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white">Why choose us</h2>
            <p className="mt-3 text-slate-300">
             vi er hurtige og leverer kvalitet. 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
