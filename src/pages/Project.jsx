function Project() {
  const qrText = `SHOPEASE - HJEMMESIDE BESKRIVELSE:
Hjemmesiden er en React e-handelsapp med flere sider: Home, Shop, About, Project, og Cart. Home-siden viser en video-baggrund og udvalgte produkter. Shop-siden viser hele produktkataloget. Hver produktet kan klikkes for at se detaljer. Produkter kan tilføjes til indkøbskurven, som ses på Cart-siden. Der er en navbar øverst og en footer nederst på alle sider.

VIGTIGE KODER OG FUNKTIONER:

1. CartContext (src/context/CartContext.jsx):
Deler indkøbskurvens tilstand på tværs af alle komponenter. Bruger React Context API og useState. addToCart-funktionen tilføjer produkter uden at slette tidligere varer. Dette undgår "props drilling" og gør appen nemmere at vedligeholde.

2. ProductCard (src/components/ProductCard.jsx):
Komponenten viser et enkelt produkt med billede, navn, pris og "Add to Cart"-knap. Den bruger hover-effekter til at gøre det visuelt tiltalende. Link til produktdetaljer gør den interaktiv.

3. Home (src/pages/Home.jsx):
Starter med en video-baggrund hero-sektion. Viser derefter udvalgte produkter i et grid. Har en "Browse full shop"-knap der linker til Shop-siden. Bruger map() til at vise alle produkter dynamisk.`;

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrText)}`;

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

      <section className="mt-10 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-950/30">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">Scan QR-koden</h2>
            <p className="mt-4 text-slate-300">
              Scan denne QR-kode med din telefon for at se en kort beskrivelse af projektet. QR-koden er kodet direkte med tekst, så du behøver ikke køre appen på en server for at få informationen.
            </p>
            <p className="mt-4 text-slate-400">
              Teksten forklarer blandt andet, at CartContext deler indkøbskurvs-tilstanden globalt, og at ProductCard viser produkter og håndterer tilføjelse til kurven.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-slate-800 p-6">
            <img src={qrSrc} alt="QR code for project description" className="h-72 w-72" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
