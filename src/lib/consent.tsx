import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { ConsentCtx } from './consentContext';

// Samtyckeshantering för icke-nödvändiga cookies (Google Maps).
//
// VIKTIGT FÖR SKARP SAJT (Bolt):
// Sätt PERSIST = true för att spara valet mellan besök via localStorage.
// AV här eftersom preview/artifacts inte stödjer browser-storage; på den
// riktiga sajten vill du ha det PÅ så besökaren slipper välja varje gång.
const PERSIST = false;
const KEY = 'kror-cookie-consent';

type Consent = 'granted' | 'denied' | null;

function read(): Consent {
  if (!PERSIST) return null;
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    setConsent(read());
  }, []);

  const set = useCallback((value: 'granted' | 'denied') => {
    setConsent(value);
    if (PERSIST) {
      try {
        localStorage.setItem(KEY, value);
      } catch {
        /* storage ej tillgängligt – valet gäller bara denna session */
      }
    }
  }, []);

  return (
    <ConsentCtx.Provider
      value={{
        mapsAllowed: consent === 'granted',
        decided: consent !== null,
        grant: () => set('granted'),
        deny: () => set('denied'),
      }}
    >
      {children}
    </ConsentCtx.Provider>
  );
}
