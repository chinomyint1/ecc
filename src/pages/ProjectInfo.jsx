import { Link } from "react-router-dom";

function ProjectInfo() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-950/30">
        <h1 className="text-4xl font-semibold text-white">Project Information</h1>

        {/* HOMEPAGE DESCRIPTION SECTION */}
        <div className="mt-10 rounded-3xl bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold text-white">📱 Hjemmeside Beskrivelse</h2>
          <p className="mt-4 text-slate-300 leading-7">
            ShopEase er en React e-handelsapp med flere sider:
          </p>
          <ul className="mt-3 space-y-2 text-slate-300 ml-4">
            <li>• <strong>Home</strong> - viser en video-baggrund hero og udvalgte produkter</li>
            <li>• <strong>Shop</strong> - viser hele produktkataloget i et grid</li>
            <li>• <strong>Product Details</strong> - detaljer om hvert produkt ved klik</li>
            <li>• <strong>Cart</strong> - viser alle tilføjede produkter</li>
            <li>• <strong>About</strong> - information om ShopEase</li>
            <li>• <strong>Project</strong> - om projektet og QR-koden</li>
          </ul>
          <p className="mt-4 text-slate-400 text-sm">
            Siderne har en navbar øverst, en footer nederst, og bruger Tailwind CSS til styling med et mørkt tema og blå accenter.
          </p>
        </div>

        {/* CODE DESCRIPTIONS SECTION */}
        <div className="mt-8 space-y-6">
          
          {/* CartContext */}
          <div className="rounded-3xl bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-white">1️⃣ CartContext - Delt Tilstand</h3>
            <p className="mt-3 text-slate-300">
              Denne fil deler indkøbskurvens tilstand på tværs af hele appen uden at sende props gennem mange lag.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
              <pre>{`import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;`}</pre>
            </div>
            <p className="mt-3 text-slate-400 text-sm">
              <strong>Hvad gør den:</strong> createContext() opretter en global "datadeling", useState() holder kurven som en array, addToCart() tilføjer nye produkter uden at slette gamle, og Provider gør det tilgængeligt for alle børnekomponenter.
            </p>
          </div>

          {/* ProductCard */}
          <div className="rounded-3xl bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-white">2️⃣ ProductCard - Produktvisning</h3>
            <p className="mt-3 text-slate-300">
              Denne komponent viser et enkelt produkt med billede, navn, pris og "Add to Cart"-knap.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
              <pre>{`function ProductCard({ product, addToCart }) {
  return (
    <div className="rounded-3xl border border-slate-700...">
      <Link to={\`/product/\${product.id}\`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h2>{product.name}</h2>
      <p>\${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}`}</pre>
            </div>
            <p className="mt-3 text-slate-400 text-sm">
              <strong>Hvad gør den:</strong> Link til produktdetaljer gør billedet klikbart. Produktnavn og pris vises dynamisk. "Add to Cart"-knappen kalder addToCart() fra CartContext. Hover-effekter gør kortet visuelt interaktivt.
            </p>
          </div>

          {/* Home Page */}
          <div className="rounded-3xl bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-white">3️⃣ Home - Startsiden</h3>
            <p className="mt-3 text-slate-300">
              Home-siden er startsiden med en video-baggrund hero og udvalgte produkter.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
              <pre>{`function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <main>
      <section className="relative">
        <video autoPlay muted loop playsInline>
          <source src="..." />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <h1>Discover your next favorite item</h1>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...} />
          ))}
        </div>
      </section>
    </main>
  );
}`}</pre>
            </div>
            <p className="mt-3 text-slate-400 text-sm">
              <strong>Hvad gør den:</strong> Video element vises baggrund med overlay for læsbarhed. useContext henter addToCart fra CartContext. map() viser alle produkter som ProductCard-komponenter. Link til /shop giver direkte adgang til fuld katalog.
            </p>
          </div>

        </div>

        <div className="mt-10 text-sm text-slate-400">
          <Link to="/project" className="inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Tilbage til Project-side
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProjectInfo;
