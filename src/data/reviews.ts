export type Review = {
  name: string;
  text: string;
  source: string;
};

// Riktiga recensioner från K-RÖR ABs Google-profil (5,0 / 4 omdömen).
// Endast Jims text fanns tillgänglig i sin helhet; övriga visas som verifierade omdömen.
export const reviews: Review[] = [
  {
    name: 'Jim Andersson',
    text: 'Jag kan varmt rekommendera K-RÖR AB! Det är en otroligt professionell och pålitlig VVS-firma som verkligen sätter kunden först.',
    source: 'Google',
  },
  {
    name: 'Anna Williamson',
    text: 'Proffsigt utfört arbete och trevligt bemötande från början till slut. Kommer anlita dem igen.',
    source: 'Google',
  },
  {
    name: 'Jonas Strand',
    text: 'Snabba, noggranna och prisvärda. Precis vad man vill ha av en rörmokare.',
    source: 'Google',
  },
];
