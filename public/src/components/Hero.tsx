import { Phone, Star, MapPin } from 'lucide-react';
import { company } from '../data/company';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="wrap grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Vänster: budskap */}
        <div className="lg:col-span-6">
          <p className="eyebrow pipe-rule mb-5">{company.tagline}</p>

          <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] text-marine font-extrabold mb-6">
            Rörmokare i
            <br />
            Stenungsund,
            <br />
            <span className="text-copper">Tjörn & Orust.</span>
          </h1>

          <p className="text-lg text-ink-soft max-w-md mb-8">
            VVS-firma i Spekeröd. Droppande kran, stopp i avloppet, nytt badrum
            eller bergvärme — ring så kommer vi och tittar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href={company.phoneHref} className="btn-primary">
              <Phone size={18} />
              Ring {company.phone}
            </a>
            <a href="#kontakt" className="btn-ghost">
              Begär offert
            </a>
          </div>

          {/* Socialt bevis — riktigt Google-betyg, inte påhittade siffror */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-0.5 text-copper">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-ink-soft">
              <strong className="text-ink">{company.rating.score}</strong> på{' '}
              {company.rating.source} · {company.rating.count} omdömen
            </span>
          </div>
        </div>

        {/* Höger: riktigt foto + adressplatta */}
        <div className="lg:col-span-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=70"
              alt="Rörmokare som installerar rör"
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg shadow-ink/10"
            />
            <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:w-auto bg-white rounded-lg border border-ink/10 shadow-md px-5 py-3.5 flex items-center gap-3">
              <MapPin size={18} className="text-copper shrink-0" />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">{company.address.full}</p>
                <p className="text-xs text-ink-muted">{company.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}