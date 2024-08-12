export type MenuItem = {
  name: string;
  url: string;
  new?: boolean;
  external?: boolean;
  subMenu?: MenuItem[];
};

export const mitgliedWerden = { name: "Mitglied werden", url: "/verein/mitglied-werden" };
export const vorstand = { name: "Vorstand", url: "/verein/vorstand" };
export const geschaeftsstelle = { name: "Geschäftsstelle", url: "/verein/geschaeftsstelle" };
export const sportgaststaette = { name: "Sportgaststätte Weiherwiesen", url: "/verein/sportgaststaette" };
export const ansprechpartner = { name: "Ansprechpartner", url: "/verein/ansprechpartner" };
export const svwBlaettle = { name: "s'SVW Blättle", url: "/verein/svw-blaettle" };
export const sponsoring = { name: "Spenden und Sponsoring", url: "/verein/spenden-und-sponsoring" };
export const veranstaltungen = { name: "Veranstaltungen", url: "/verein/veranstaltungen" };
export const historie = { name: "Historie", url: "/verein/historie" };
export const foerderkreis = { name: "Förderkreis Jugendsport", url: "https://fkjs.de/", external: true };
export const jugendschutz = { name: "Kinder- und Jugendschutz", url: "/verein/jugendschutz", new: true };
export const satzung = { name: "Satzung", url: "/verein/satzung" };
export const geschaeftsordnung = { name: "Geschäftsordnung", url: "/verein/geschaeftsordnung" };
export const jugendschutzordnung = { name: "Jugendschutzordnung", url: "/verein/jugendschutzordnung" };
export const datenschutz = { name: "Datenschutz", url: "/verein/datenschutz" };
export const impressum = { name: "Impressum", url: "/verein/impressum" };
export const formales = {
  name: "Formales",
  url: "/verein/formales",
  subMenu: [satzung, geschaeftsordnung, jugendschutzordnung, datenschutz, impressum],
};
export const verein: MenuItem = {
  name: "Verein",
  url: "/verein",
  subMenu: [
    vorstand,
    geschaeftsstelle,
    sportgaststaette,
    ansprechpartner,
    svwBlaettle,
    jugendschutz,
    sponsoring,
    mitgliedWerden,
    veranstaltungen,
    historie,
    foerderkreis,
    formales,
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
export const hobbyHorsing: MenuItem = {
  name: "HobbyHorsing",
  url: "/fitness-und-gesundheitssport/hobbyhorsing",
};
export const steelDarts: MenuItem = {
  name: "Steel Darts",
  url: "/fitness-und-gesundheitssport/steel-darts",
  new: true,
};
export const fitnessUndGesundheitssport: MenuItem = {
  name: "Fitness & Gesundheitssport",
  url: "/fitness-und-gesundheitssport",
  subMenu: [yoga, powerFitness, gymnastik65plus, teenDance, fitUndGesund, hobbyHorsing, steelDarts],
};

export const fussballAktive = { name: "Aktive", url: "/fussball/aktive" };
export const fussballB = { name: "B-Junioren", url: "/fussball/b-junioren" };
export const fussballC = { name: "C-Junioren", url: "/fussball/c-junioren" };
export const fussballD = { name: "D-Junioren", url: "/fussball/d-junioren" };
export const fussballE = { name: "E-Junioren", url: "/fussball/e-junioren" };
export const fussballF = { name: "F-Junioren", url: "/fussball/f-junioren" };
export const fussballBambini = { name: "Bambini", url: "/fussball/bambini" };
export const fussballFrauen = { name: "Frauenfußball", url: "/fussball/frauen" };
export const fussballHobby = { name: "Hobbykicker", url: "/fussball/hobbykicker" };
export const fussballAkademie = { name: "Fußball-Akademie", url: "/fussball/akademie" };
export const fussball = {
  name: "Fußball",
  url: "/fussball",
  subMenu: [
    fussballAktive,
    fussballB,
    fussballC,
    fussballD,
    fussballE,
    fussballF,
    fussballBambini,
    fussballFrauen,
    fussballHobby,
    fussballAkademie,
  ],
};

export const badmintonAktive = { name: "Aktive", url: "/badminton/aktive" };
export const badmintonErwachsene = { name: "Erwachsene", url: "/badminton/erwachsene" };
export const badmintonKinder = { name: "Kinder", url: "/badminton/kinder" };
export const badminton = {
  name: "Badminton",
  url: "/badminton",
  subMenu: [badmintonAktive, badmintonErwachsene, badmintonKinder],
};

export const rehasport = { name: "Reha-Sport", url: "/rehasport" };

export const sparten: MenuItem = {
  name: "Sparten",
  url: "/sparten",
  subMenu: [badminton, rehasport, fussball, fitnessUndGesundheitssport],
};

export const aktuelles: MenuItem = { name: "Aktuelles", url: "/aktuelles" };

export const sitemap: MenuItem[] = [verein, sparten, aktuelles];

export const activities: MenuItem[] = [
  badminton,
  fussball,
  yoga,
  powerFitness,
  gymnastik65plus,
  teenDance,
  fitUndGesund,
  rehasport,
  hobbyHorsing,
];

export function findItemByName(menuItem: MenuItem, name: string): MenuItem | undefined {
  return menuItem.subMenu?.find((item) => item.name === name);
}
