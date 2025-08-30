import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-rose-200 to-sky-200 text-slate-700">
            <Sparkles className="h-4 w-4" />
          </div>
          <span
            className="text-2xl tracking-tight text-slate-700"
            style={{ fontFamily: 'cursive' }}
          >
            Echo
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition">How it works</a>
          <a href="#cta" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 shadow hover:shadow-md hover:-translate-y-0.5 transition">
            Start Journaling
          </a>
        </nav>
        <a href="#cta" className="sm:hidden inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">
          Start
        </a>
      </div>
    </header>
  );
}
