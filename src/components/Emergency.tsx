import { Phone } from 'lucide-react';
import { company } from '../data/company';

export default function Emergency() {
  return (
    <section className="bg-copper">
      <div className="wrap py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70 mb-2">
            Jourverksamhet inom VVS & kyla
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-extrabold">
            Akut vattenläcka? Ring oss direkt.
          </h2>
        </div>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-3 bg-white text-copper-600 px-7 py-4 rounded-md font-display font-extrabold text-xl shrink-0 hover:bg-sand-100 transition-colors"
        >
          <Phone size={22} />
          {company.phone}
        </a>
      </div>
    </section>
  );
}
