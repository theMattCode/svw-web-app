export type MenuItem = {
  name: string;
  url: string;
  external?: boolean;
  subMenu?: MenuItem[];
};

export const mitgliedWerden = { name: "Mitglied werden", url: "/verein/mitglied-werden" };

export const verein: MenuItem = {
  name: "Verein",
  url: "/verein",
  subMenu: [
    { name: "Vorstand", url: "/verein/vorstand" },
    { name: "Geschäftsstelle", url: "/verein/geschaeftsstelle" },
    { name: "Sportgaststätte Weiherwiesen", url: "/verein/sportgaststaette" },
    { name: "Ansprechpartner", url: "/verein/ansprechpartner" },
    { name: "s'SVW Blättle", url: "/verein/svw-blaettle" },
    { name: "Spenden und Sponsoring", url: "/verein/spenden-und-sponsoring" },
    mitgliedWerden,
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

export const yoga: MenuItem = { name: "Yoga", url: "/fitness-und-gesundheitssport/yoga" };
export const powerFitness: MenuItem = {
  name: "Power Fitness",
  url: "/fitness-und-gesundheitssport/powerfitness",
};
export const gymnastik65plus: MenuItem = {
  name: "Gymnastik 65plus",
  url: "/fitness-und-gesundheitssport/gymnastik-65plus",
};
export const teenDance: MenuItem = { name: "Teen Dance", url: "/fitness-und-gesundheitssport/teen-dance" };
export const fitUndGesund: MenuItem = {
  name: "Fit und Gesund",
  url: "/fitness-und-gesundheitssport/fit-und-gesund",
};
export const fitnessUndGesundheitssport: MenuItem = {
  name: "Fitness & Gesundheitssport",
  url: "/fitness-und-gesundheitssport",
  subMenu: [yoga, powerFitness, gymnastik65plus, teenDance, fitUndGesund],
};

export const fusballAktive = { name: "Aktive", url: "/fussball/aktive" };
export const fussballB = { name: "B-Junioren", url: "/fussball/b-junioren" };
export const fussballC = { name: "C-Junioren", url: "/fussball/c-junioren" };
export const fussballD = { name: "D-Junioren", url: "/fussball/d-junioren" };
export const fussballE = { name: "E-Junioren", url: "/fussball/e-junioren" };
export const fussballF = { name: "F-Junioren", url: "/fussball/f-junioren" };
export const fussballBambini = { name: "Bambini", url: "/fussball/bambini" };
export const fussballDamen = { name: "Damen", url: "/fussball/damen" };
export const fussballHobby = { name: "Hobbykicker", url: "/fussball/hobbykicker" };
export const fussball = {
  name: "Fußball",
  url: "/fussball",
  subMenu: [
    fusballAktive,
    fussballB,
    fussballC,
    fussballD,
    fussballE,
    fussballF,
    fussballBambini,
    fussballDamen,
    fussballHobby,
  ],
};

export const badminton = { name: "Badminton", url: "/badminton" };

export const rehasport = { name: "Reha-Sport", url: "/rehasport" };

export const sparten: MenuItem = {
  name: "Sparten",
  url: "/sparten",
  subMenu: [fitnessUndGesundheitssport, fussball, badminton, rehasport],
};

export const aktuelles: MenuItem = { name: "Aktuelles", url: "/aktuelles" };

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
