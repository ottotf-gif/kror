// Centraliserad företagsdata — ändra på ett ställe, slår igenom överallt.
export const company = {
  name: 'K-RÖR AB',
  shortName: 'K-RÖR',
  tagline: 'VVS & rörmokeri i Stenungsund, Tjörn & Orust',
  phone: '070-455 15 04',
  phoneHref: 'tel:+46704551504',
  email: 'info@k-ror.se',
  emailHref: 'mailto:info@k-ror.se',
  address: {
    street: 'Groland 131',
    zip: '444 93',
    city: 'Spekeröd',
    full: 'Groland 131, 444 93 Spekeröd',
  },
  mapsEmbed:
    'https://www.google.com/maps?q=Groland+131,+444+93+Speker%C3%B6d&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Groland+131+444+93+Speker%C3%B6d',
  hours: 'Mån–fre från 06:30',
  areas: ['Stenungsund', 'Tjörn', 'Orust', 'Spekeröd', 'Stora Höga', 'Jörlanda'],
  rating: { score: '5,0', count: 4, source: 'Google' },
  org: 'Säte i Spekeröd, Stenungsunds kommun',
} as const;