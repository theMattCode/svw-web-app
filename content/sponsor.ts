import { ImageDimensions } from "#/lib/image";

export type Sponsor = {
  name: string;
  url: string | null;
  image: { url: string } & ImageDimensions;
};
export const sponsors: Sponsor[] = [
  {
    name: "KOCHER+BECK GMBH",
    url: "https://www.kocher-beck.com/",
    image: {
      url: "/media/sponsor/kocher+beck_gmbh.jpg",
      width: 408,
      height: 133,
    },
  },
  {
    name: "Getränke Schwab",
    url: "http://www.getraenke-schwab.de/",
    image: {
      url: "/media/sponsor/getraenke_schwab.svg",
      width: 2126,
      height: 1418,
    },
  },
  {
    name: "Karosserie Böpple",
    url: "http://www.karosserie-boepple.de/",
    image: {
      url: "/media/sponsor/karosserie_boepple.jpg",
      width: 535,
      height: 248,
    },
  },
  {
    name: "JMS Fahrzeugteile",
    url: "https://www.jms-fahrzeugteile.de/",
    image: {
      url: "/media/sponsor/jms.svg",
      width: 2835,
      height: 1890,
    },
  },
  {
    name: "NECKER GmbH",
    url: "https://necker.de/",
    image: {
      url: "/media/sponsor/necker-gmbh.svg",
      width: 2835,
      height: 1890,
    },
  },
  {
    name: "Pizzeria Linde",
    url: null,
    image: {
      url: "/media/sponsor/pizzeria_linde.jpg",
      width: 823,
      height: 541,
    },
  },
  {
    name: "WVS Immobilien GmbH",
    url: "https://wvs-immo.de/",
    image: {
      url: "/media/sponsor/wvs_immobilien_gmbh.png",
      width: 317,
      height: 136,
    },
  },
  {
    name: "Böpple - Die Fahrzeuglackierer",
    url: "https://die-fahrzeuglackierer.de/",
    image: {
      url: "/media/sponsor/boepple_die_fahrzeuglackierer.jpg",
      width: 745,
      height: 360,
    },
  },
  {
    name: "KA Möbel Systeme - Olfert Alter e.K.",
    url: "http://www.ka-moebel.de/",
    image: {
      url: "/media/sponsor/ka_moebel_systeme.svg",
      width: 2835,
      height: 1890,
    },
  },
  {
    name: "Gebr. Dürr GmbH",
    url: "http://duerr-landtechnik.de/",
    image: {
      url: "/media/sponsor/gebr_duerr_gmbh.jpg",
      width: 640,
      height: 176,
    },
  },
  {
    name: "ZDS Bürosysteme Vertrieb & Service GmbH",
    url: "https://www.zds-gmbh.de/",
    image: {
      url: "/media/sponsor/zds_buerosysteme_gmbh.jpg",
      width: 420,
      height: 216,
    },
  },
  {
    name: "Finanz- und Versicherungsmakler Thomas Breuer",
    url: null,
    image: {
      url: "/media/sponsor/ftb.png",
      width: 323,
      height: 75,
    },
  },
  {
    name: "Alexander Armbruster Kfz-Meisterbetrieb",
    url: "https://bosch-service-armbruster.de/",
    image: {
      url: "/media/sponsor/armbruster_kfz.jpg",
      width: 828,
      height: 360,
    },
  },
  {
    name: "Heim Tief- und Straßenbau GmbH",
    url: "http://www.heim-strassenbau.com/",
    image: {
      url: "/media/sponsor/heim_gmbh.png",
      width: 397,
      height: 214,
    },
  },
  {
    name: "Stahl Gruppe",
    url: "http://www.stahl-firmengruppe.com/",
    image: {
      url: "/media/sponsor/stahl_gruppe.svg",
      width: 2835,
      height: 1890,
    },
  },
  {
    name: "Eckardt & Eckardt Rechtsanwaltskanzlei",
    url: null,
    image: {
      url: "/media/sponsor/eckardt_und_eckardt_rechtsanwaltskanzlei.jpg",
      width: 800,
      height: 305,
    },
  },
  {
    name: "PATAVO GmbH",
    url: "https://www.patavo.de/",
    image: {
      url: "/media/sponsor/patavo_gmbh.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "WESTKEMPER",
    url: null,
    image: {
      url: "/media/sponsor/westkemper.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "Walters Eismobil",
    url: null,
    image: {
      url: "/media/sponsor/walters_eismobil.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "Landwirtschaftsbetrieb Karl Gaiser",
    url: null,
    image: {
      url: "/media/sponsor/karl_gaiser.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "Schuhhaus Wezel",
    url: null,
    image: {
      url: "/media/sponsor/schuhhaus_wezel.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "Adler Häslach",
    url: null,
    image: {
      url: "/media/sponsor/adler_haeslach.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "Optik Girke",
    url: null,
    image: {
      url: "/media/sponsor/optik_girke.png",
      width: 800,
      height: 305,
    },
  },
  {
    name: "Rebmann Vereinsbedarf",
    url: null,
    image: {
      url: "/media/sponsor/rebmann_vereinsbedarf.png",
      width: 800,
      height: 305,
    },
  },
];
