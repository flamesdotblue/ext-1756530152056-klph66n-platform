import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Echo. Reflect softly.</p>
      </footer>
    </div>
  );
}

export default App;
