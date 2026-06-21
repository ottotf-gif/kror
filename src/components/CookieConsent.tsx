import { useConsent } from '../lib/useConsent';

export default function CookieConsent() {
  const { decided, grant, deny } = useConsent();

  if (decided) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-4">
      <div className="wrap">
        <div className="bg-white border border-ink/15 rounded-xl shadow-lg shadow-ink/10 p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <p className="font-display font-bold text-ink mb-1">Cookies för kartan</p>
            <p className="text-sm text-ink-soft leading-relaxed">
              Vi använder inga cookies på sajten i övrigt. Vill du se kartan här
              laddar vi in Google Maps, som sätter egna cookies. Du väljer själv.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={deny}
              className="px-5 py-2.5 rounded-md border border-ink/15 text-ink font-medium hover:border-ink/40 hover:bg-sand-100 transition-colors"
            >
              Avböj
            </button>
            <button
              onClick={grant}
              className="px-5 py-2.5 rounded-md bg-marine text-sand-50 font-semibold hover:bg-marine-600 transition-colors"
            >
              Tillåt karta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
