export type MenuItem = {
  name: string;
  url: string;
  external?: boolean;
  subMenu?: MenuItem[];
};

export const verein = {
  name: "Verein",
  url: "/verein",
  subMenu: [
    { name: "Vorstand", url: "/verein/vorstand" },
    { name: "Geschäftsstelle", url: "/verein/geschaeftsstelle" },
    { name: "Sportgaststätte Weiherwiesen", url: "/verein/sportgaststaette" },
    { name: "Ansprechpartner", url: "/verein/ansprechpartner" },
    { name: "s'SVW Blättle", url: "/verein/svw-blaettle" },
    { name: "Spenden und Sponsoring", url: "/verein/spenden-und-sponsoring" },
    { name: "Mitglied werden", url: "/verein/mitglied-werden" },
    { name: "Veranstaltungen", url: "/verein/veranstaltungen" },
    { name: "Historie", url: "/verein/historie" },
    { name: "Förderkreis Jugendsport", url: "https://fkjs.de/", external: true },
    {
      name: "Formales",
      url: "/formales",
      subMenu: [
        { name: "Satzung", url: "/verein/satzung" },
        { name: "Datenschutz", url: "/verein/datenschutz" },
        { name: "Impressum", url: "/verein/impressum" },
      ],
    },
  ],
};

export const sparten = {
  name: "Sparten",
  url: "/sparten",
  subMenu: [
    {
      name: "Fitness & Gesundheitssport",
      url: "/fitness-und-gesundheitssport",
      subMenu: [
        { name: "Yoga", url: "/fitness-und-gesundheitssport/yoga" },
        {
          name: "Power Fitness",
          url: "/fitness-und-gesundheitssport/power-fitness",
        },
        {
          name: "Gymnastik 65plus",
          url: "/fitness-und-gesundheitssport/gymnastik-65plus",
        },
        { name: "Teen Dance", url: "/fitness-und-gesundheitssport/teen-dance" },
        {
          name: "Fit und Gesund",
          url: "/fitness-und-gesundheitssport/fit-und-gesund",
        },
      ],
    },
    {
      name: "Fußball",
      url: "/fussball",
      subMenu: [
        { name: "Aktive", url: "/fussball/aktive" },
        { name: "C-Jugend", url: "/fussball/c-junioren" },
        { name: "D-Jugend", url: "/fussball/d-junioren" },
        { name: "E-Jugend", url: "/fussball/e-junioren" },
        { name: "F-Jugend", url: "/fussball/f-junioren" },
        { name: "Bambini", url: "/fussball/bambini" },
        { name: "Damen", url: "/fussball/damen" },
        { name: "Hobbykicker", url: "/fussball/hobbykicker" },
      ],
    },
    { name: "Badminton", url: "/badminton" },
    { name: "Reha-Sport", url: "/rehasport" },
  ],
};

export const aktuelles = { name: "Aktuelles", url: "/aktuelles" };

export const sitemap: MenuItem[] = [verein, sparten, aktuelles];

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

export function findItemByName(menuItem: MenuItem, name: string): MenuItem | undefined {
  return menuItem.subMenu?.find((item) => item.name === name);
}
