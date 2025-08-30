import { Mic } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight text-slate-900">
              <span className="block" style={{ fontFamily: 'cursive' }}>Echo</span>
              <span className="block mt-2">Journal with your voice.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Whisper your day. Echo listens, transcribes, and gently surfaces the emotional patterns behind your reflections—so you can feel more, and carry less.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition">
                <Mic className="h-4 w-4" />
                Start Journaling
              </a>
              <a href="#features" className="text-slate-700 hover:text-slate-900">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md">
              <div className="relative rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur shadow-xl">
                <div className="p-4 border-b border-slate-200/60">
                  <div className="h-2 w-16 rounded-full bg-slate-200" />
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="h-10 w-3/5 rounded-lg bg-gradient-to-r from-rose-100 to-rose-50" />
                    <div className="h-24 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 flex items-center justify-center">
                      <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 shadow hover:shadow-md">
                        <Mic className="h-4 w-4" /> Record note
                      </button>
                    </div>
                    <div className="h-4 w-2/3 rounded bg-slate-100" />
                    <div className="h-4 w-1/2 rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -right-6 -bottom-6 h-40 w-40 rounded-3xl bg-gradient-to-tr from-rose-100 to-sky-100 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
