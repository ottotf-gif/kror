import { company } from '../data/company';

const points = [
  {
    k: 'Lokalt',
    title: 'Folk från trakten',
    body: 'Säte i Spekeröd, jobb i Stenungsund, Tjörn och Orust. Kort restid och lokal kännedom.',
  },
  {
    k: 'Brett',
    title: 'Värme, vatten & kyla',
    body: 'Rör, avlopp, badrum, kranar — och hela vägen upp till bergvärmepumpar och kylanläggning.',
  },
  {
    k: 'Tryggt',
    title: 'Tydligt pris från start',
    body: 'Kostnadsfri offert innan arbetet börjar. Inga överraskningar på fakturan.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 reveal">
          <p className="eyebrow pipe-rule pl-7 mb-4">Varför K-RÖR</p>
          <h2 className="text-4xl md:text-5xl text-marine font-extrabold">
            En rörfirma som
            <br />
            håller vad den lovar
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-1 gap-px bg-ink/10 rounded-xl overflow-hidden border border-ink/10">
          {points.map((p) => (
            <div key={p.k} className="reveal bg-sand-100 p-6 md:p-7 flex gap-5">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-copper-600 pt-1.5 w-16 shrink-0">
                {p.k}
              </span>
              <div>
                <h3 className="text-xl font-display font-bold text-ink mb-1.5">{p.title}</h3>
                <p className="text-ink-soft leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
          <div className="bg-marine p-6 md:p-7 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sand-50 font-display font-bold text-lg">
              {company.org}
            </p>
            <p className="font-mono text-sm text-marine-50/70">{company.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}