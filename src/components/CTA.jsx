export default function CTA() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-rose-50 via-white to-sky-50 p-10 sm:p-12 shadow-xl">
          <div className="absolute -z-10 -top-10 -right-10 h-40 w-40 rounded-full bg-rose-200/50 blur-3xl" />
          <div className="absolute -z-10 -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="max-w-2xl">
            <h3 className="text-3xl font-medium text-slate-900">Start a softer kind of journaling</h3>
            <p className="mt-3 text-slate-600">Speak your notes, and let Echo gently surface what matters—without the noise.</p>
          </div>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition">
              Start Journaling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
