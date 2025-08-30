import { Mic, Heart, Calendar, Lock } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Hands-free journaling',
    desc: 'Capture thoughts as voice notes. Echo transcribes with care so you can stay present.',
  },
  {
    icon: Heart,
    title: 'Emotion insights',
    desc: 'Spot patterns across days and weeks with gentle, non-judgmental summaries.',
  },
  {
    icon: Calendar,
    title: 'Daily rhythm',
    desc: 'Light prompts and streaks help you build a soothing reflection habit.',
  },
  {
    icon: Lock,
    title: 'Private by design',
    desc: 'Your notes are encrypted and yours alone. Export anytime, delete forever.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900">A calm space to hear yourself</h2>
          <p className="mt-3 text-slate-600">Designed to be gentle, minimal, and supportive—so the only thing that fills the page is your voice.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-rose-200 to-sky-200 flex items-center justify-center text-slate-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
