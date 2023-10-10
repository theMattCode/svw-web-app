export type Club = {
  name: string;
  short: string;
  abbreviation: string;
  address: { street: string; zip: string; city: string };
  contact: { telephone: string; telefax: string; email: string };
  logo: string;
  emblem: string;
  copyright: string;
};

export const club = {
  name: "Sportverein Walddorf 1904 e.V.",
  short: "SV Walddorf",
  abbreviation: "SVW",
  address: {
    street: "Weiherwiesen 5",
    zip: "72141",
    city: "Walddorfhäslach",
  },
  contact: {
    telephone: "+49 7127 580015",
    telefax: "+49 7127 580616",
    email: "info@svwalddorf.de",
  },
  logo: "/media/svw-logo.svg",
  emblem: "/media/svw-emblem.svg",
  copyright: "© Offizielle Website des SV Walddorf 1904 e.V.",
};

export type Shop = {
  name: string;
  url: string;
};

export const shops: Shop[] = [
  {
    name: "SVW",
    url: "https://verein.baechi-teamsport.de/SV-Walddorf",
  },
  {
    name: "SVW Aktive",
    url: "https://verein.baechi-teamsport.de/SV-Walddorf-Aktive",
  },
  {
    name: "Schönbuch United",
    url: "https://verein.baechi-teamsport.de/Schoenbuch-United",
  },
];
