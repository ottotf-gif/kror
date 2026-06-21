import { useContext } from 'react';
import { ConsentCtx } from './consentContext';

export function useConsent() {
  const ctx = useContext(ConsentCtx);
  if (!ctx) throw new Error('useConsent måste användas inom ConsentProvider');
  return ctx;
}
