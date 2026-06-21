export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

// Riktiga tjänster enligt K-RÖR ABs Google-/Eniro-uppgifter.
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

// Premiumtjänst — lyfts separat.
export const heatPump = {
  title: 'Bergvärmepumpar',
  description:
    'Installation, service och felsökning av bergvärmepumpar — värme, vatten, kyla och värmepumpar. En investering som sänker uppvärmningskostnaden och höjer fastighetsvärdet.',
  image:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=70',
  alt: 'Tekniker som servar en värmepump',
};
