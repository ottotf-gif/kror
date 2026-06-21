import { ArrowRight } from 'lucide-react';
import { services, heatPump } from '../data/services';
import { company } from '../data/company';

export default function Services() {
  return (
    <section id="tjanster" className="py-20 md:py-28 bg-sand-50 border-y border-ink/8">
      <div className="wrap">
        <div className="max-w-2xl mb-12 md:mb-16 reveal">
          <p className="eyebrow pipe-rule mb-4">Vad vi gör</p>
          <h2 className="text-4xl md:text-5xl text-marine font-extrabold mb-4">
            Det här fixar vi
          </h2>
          <p className="text-lg text-ink-soft">
            Från en läckande kran till ett helt badrum. Säg vad som krånglar
            så löser vi det.
          </p>
        </div>

        {/* Kort med riktiga foton istället för ikon-rutor */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal group bg-white rounded-xl border border-ink/10 overflow-hidden hover:border-copper/40 transition-colors"
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="w-full aspect-[5/4] object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-display font-bold text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">{s.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bergvärme — premium, egen layout med foto */}
        <div className="reveal mt-12 grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-ink/10 bg-marine">
          <img
            src={heatPump.image}
            alt={heatPump.alt}
            loading="lazy"
            className="w-full h-56 lg:h-full object-cover"
          />
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper mb-4">
              Specialitet
            </p>
            <h3 className="text-3xl md:text-4xl text-sand-50 font-extrabold mb-4">
              {heatPump.title}
            </h3>
            <p className="text-marine-50/80 leading-relaxed mb-7 max-w-md">
              {heatPump.description}
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2.5 bg-copper text-white px-7 py-3.5 rounded-md font-semibold w-fit hover:bg-copper-600 transition-colors"
            >
              Begär offert på bergvärme
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <p className="text-sm text-ink-muted mt-6">
          Serviceområde: {company.areas.join(' · ')}
        </p>
      </div>
    </section>
  );
}
