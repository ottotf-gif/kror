import { ArrowUpRight } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    title: 'Rörinstallation & rörmokeri',
    description:
      'Nyinstallation, omläggning och reparation av vatten- och avloppsrör för villa, lägenhet och företag.',
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=70',
    alt: 'Rörmokare som arbetar med kopparrör',
  },
  {
    title: 'Avloppsreparation',
    description:
      'Stopp, läckor och skadade avloppsrör — vi felsöker och åtgärdar, hemma eller i fastighet.',
    image:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=70',
    alt: 'Verktyg och rör vid avloppsarbete',
  },
  {
    title: 'Dusch & badrum',
    description:
      'Duschinstallation och duschreparation — från komplett badrum till byte av blandare och tätning.',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=70',
    alt: 'Nyinstallerat badrum med dusch',
  },
  {
    title: 'Kran, termostat & toalett',
    description:
      'Installation och byte av kranar, termostatblandare och toalettstolar — snabbt och rätt från start.',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=70',
    alt: 'Kran och blandare i kök',
  },
];

export const heatPump = {
  title: 'Bergvärmepumpar',
  description:
    'Installation, service och felsökning av bergvärmepumpar — värme, vatten, kyla och värmepumpar. En investering som sänker uppvärmningskostnaden och höjer fastighetsvärdet.',
  image:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=70',
  alt: 'Tekniker som servar en värmepump',
};

export default function Services() {
  return (
    <section id="tjanster" className="py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 reveal">
          <div>
            <p className="eyebrow pipe-rule pl-7 mb-4">Vad vi gör</p>
            <h2 className="text-4xl md:text-5xl text-marine font-extrabold">
              Tjänster
            </h2>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal group relative rounded-xl overflow-hidden border border-ink/10 bg-white"
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-display font-bold text-ink mb-1.5 group-hover:text-copper transition-colors">
                  {s.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Premium: Bergvärmepumpar */}
        <div className="reveal relative rounded-xl overflow-hidden border border-ink/10">
          <img
            src={heatPump.image}
            alt={heatPump.alt}
            loading="lazy"
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marine/90 via-marine/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-6 md:p-10 max-w-xl">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.16em] text-copper-50 bg-copper/80 px-3 py-1 rounded mb-4">
                Premiumtjänst
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-sand-50 font-extrabold mb-3">
                {heatPump.title}
              </h3>
              <p className="text-sand-200 leading-relaxed mb-5 hidden sm:block">
                {heatPump.description}
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-sand-50 text-marine px-6 py-3 rounded-md font-semibold hover:bg-white transition-colors"
              >
                Begär offert
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
