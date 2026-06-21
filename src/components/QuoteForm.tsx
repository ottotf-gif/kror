import { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { company } from '../data/company';

type Status = 'idle' | 'sending' | 'done';

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    jobType: '',
    description: '',
  });

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // Demo: ingen riktig leverans — visar bara skicka-animation.
  const submit = () => {
    if (status !== 'idle') return;
    setStatus('sending');
    setTimeout(() => setStatus('done'), 1100);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Vänster: kontaktuppgifter + karta */}
        <div className="lg:col-span-5">
          <p className="eyebrow pipe-rule mb-4">Hör av dig</p>
          <h2 className="text-4xl md:text-5xl text-marine font-extrabold mb-5">
            Begär en kostnadsfri offert
          </h2>
          <p className="text-lg text-ink-soft mb-8">
            Skriv vad du behöver hjälp med så hör vi av oss med ett pris.
            Är det akut? Ring direkt, det går snabbast.
          </p>

          <ul className="space-y-3 mb-8">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-3 text-ink hover:text-copper transition-colors">
                <Phone size={18} className="text-copper" />
                <span className="font-mono">{company.phone}</span>
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="flex items-center gap-3 text-ink hover:text-copper transition-colors">
                <Mail size={18} className="text-copper" />
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink">
              <MapPin size={18} className="text-copper" />
              {company.address.full}
            </li>
          </ul>

          <div className="rounded-xl overflow-hidden border border-ink/10">
            <iframe
              title="Karta till K-RÖR AB, Groland 131, Spekeröd"
              src={company.mapsEmbed}
              width="100%"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>

        {/* Höger: formulär */}
        <div className="lg:col-span-6 lg:col-start-7">
          {status === 'done' ? (
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center bg-marine-50 border border-marine/15 rounded-2xl p-10 animate-[fadein_0.4s_ease]">
              <div className="w-16 h-16 rounded-full bg-marine flex items-center justify-center mb-5">
                <CheckCircle size={32} className="text-sand-50" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-marine mb-2">
                Tack, vi hör av oss!
              </h3>
              <p className="text-ink-soft max-w-sm">
                Din förfrågan är skickad. Vi återkommer normalt inom ett dygn.
                Vid akut ärende — ring {company.phone}.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-ink/10 p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Namn" name="name" value={form.name} onChange={update} placeholder="Ditt namn" />
                <Field label="Telefon" name="phone" type="tel" value={form.phone} onChange={update} placeholder="07X-XXX XX XX" />
              </div>
              <Field label="E-post" name="email" type="email" value={form.email} onChange={update} placeholder="din@email.se" />

              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-ink mb-1.5">
                  Typ av jobb
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={form.jobType}
                  onChange={update}
                  className="w-full bg-sand-100 border border-ink/15 rounded-md px-4 py-3 text-ink"
                >
                  <option value="">Välj typ av jobb</option>
                  <option>Rörinstallation & rörmokeri</option>
                  <option>Avloppsreparation</option>
                  <option>Dusch & badrum</option>
                  <option>Kran / termostat / toalett</option>
                  <option>Bergvärmepump</option>
                  <option>Akut / jour</option>
                  <option>Övrigt</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-ink mb-1.5">
                  Beskrivning
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={form.description}
                  onChange={update}
                  placeholder="Beskriv kort vad du behöver hjälp med..."
                  className="w-full bg-sand-100 border border-ink/15 rounded-md px-4 py-3 text-ink resize-none"
                />
              </div>

              <button
                onClick={submit}
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Skickar…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Skicka förfrågan
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, value, onChange, placeholder, type = 'text',
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-sand-100 border border-ink/15 rounded-md px-4 py-3 text-ink placeholder:text-ink-muted/60"
      />
    </div>
  );
}