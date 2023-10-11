export type MenuItem = {
  name: string;
  url: string;
  subMenu?: MenuItem[];
};

export const sitemap: MenuItem[] = [
  {
    name: "Verein",
    url: "/verein",
    subMenu: [
      { name: "Vorstand", url: "/vorstand" },
      { name: "Geschäftsstelle", url: "/geschaeftsstelle" },
      { name: "Sportgaststätte", url: "/sportgaststaette" },
      { name: "Ansprechpartner", url: "/ansprechpartner" },
      { name: "s'SVW Blättle", url: "/svw-blaettle" },
      { name: "Spenden und Sponsoring", url: "/spenden-und-sponsoring" },
      { name: "Mitglied werden", url: "/mitglied-werden" },
      { name: "Veranstaltungen", url: "/veranstaltungen" },
      {
        name: "Formales",
        url: "/formales",
        subMenu: [
          { name: "Satzung", url: "/satzung" },
          { name: "Datenschutz", url: "/datenschutz" },
          { name: "Impressum", url: "/impressum" },
        ],
      },
      { name: "Historie", url: "/historie" },
    ],
  },
  {
    name: "Sparten",
    url: "/sparten",
    subMenu: [
      {
        name: "Fußball",
        url: "/fussball",
        subMenu: [
          { name: "Aktive", url: "/fussball-aktive" },
          { name: "C-Jugend", url: "/fussball-c-junioren" },
          { name: "D-Jugend", url: "/fussball-d-junioren" },
          { name: "E-Jugend", url: "/fussball-e-junioren" },
          { name: "F-Jugend", url: "/fussball-f-junioren" },
          { name: "Bambini", url: "/fussball-bambini" },
          { name: "Damen", url: "/fussball-damen" },
          { name: "Hobbykicker", url: "/fussball-hobbykicker" },
        ],
      },
      { name: "Badminton", url: "/badminton" },
      { name: "Reha-Sport", url: "/rehasport" },
      {
        name: "Fitness & Gesundheitssport",
        url: "/fitness-und-gesundheitssport",
        subMenu: [
          { name: "Yoga", url: "/yoga" },
          { name: "Power Fitness", url: "/power-fitness" },
          { name: "Gymnastik 65plus", url: "/gymnastik-65plus" },
          { name: "Teen Dance", url: "/teen-dance" },
          { name: "Fit und Gesund", url: "/fit-und-gesund" },
        ],
      },
    ],
  },
  { name: "Aktuelles", url: "/aktuelles" },
];

export const activities: MenuItem[] = [
  { name: "Badminton", url: "/badminton" },
  { name: "Fußball", url: "/fussball" },
  { name: "Yoga", url: "/yoga" },
  { name: "Power Fitness", url: "/power-fitness" },
  { name: "Gymnastik 65plus", url: "/gymnastik-65plus" },
  { name: "Teen Dance", url: "/teen-dance" },
  { name: "Fit und Gesund", url: "/fit-und-gesund" },
  { name: "Reha-Sport", url: "/rehasport" },
];
