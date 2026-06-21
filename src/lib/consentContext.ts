import { createContext } from 'react';

export type ConsentValue = {
  mapsAllowed: boolean;
  decided: boolean;
  grant: () => void;
  deny: () => void;
};

export const ConsentCtx = createContext<ConsentValue | null>(null);
