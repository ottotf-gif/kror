import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/reviews';
import { company } from '../data/company';

export default function Reviews() {
  return (
    <section id="omdomen" className="py-20 md:py-28 bg-sand-50 border-y border-ink/8">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 reveal">
          <div>
            <p className="eyebrow pipe-rule mb-4">Vad kunderna säger</p>
            <h2 className="text-4xl md:text-5xl text-marine font-extrabold">
              5,0 på Google
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 text-copper">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-ink-soft text-sm">
              <strong className="text-ink">{company.rating.score}</strong> ·{' '}
              {company.rating.count} omdömen på {company.rating.source}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal bg-white rounded-xl border border-ink/10 p-6 flex flex-col"
            >
              <Quote size={22} className="text-copper/40 mb-4" />
              <blockquote className="text-ink-soft leading-relaxed flex-1">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-ink/8 flex items-center justify-between">
                <span className="font-display font-bold text-ink">{r.name}</span>
                <span className="text-xs font-mono text-ink-muted">{r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}