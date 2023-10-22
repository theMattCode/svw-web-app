import { Image } from "#/content/image";

export type Person = {
  firstname: string;
  lastname: string;
  tags: string[];
  email?: string;
  phone?: string[];
  image?: Image;
};

export const people: Person[] = [
  {
    firstname: "Markus",
    lastname: "Hartlieb",
    tags: ["1. Vorsitzender"],
    email: "markus.hartlieb@svwalddorf.de",
    phone: ["+49 176 10508497"],
    image: { src: "/media/people/markus-hartlieb-2023.png", alt: "Markus Hartlieb", width: 363, height: 477 },
  },
  {
    firstname: "Andrea",
    lastname: "Speier",
    tags: ["2. Vorsitzende", "Übungsleitung Teen Dance 1"],
    email: "andrea.speier@svwalddorf.de",
    phone: ["+49 171 5775846"],
    image: { src: "/media/people/andrea-speier-2023.png", alt: "Andrea Speier", width: 193, height: 256 },
  },
  {
    firstname: "Klaus",
    lastname: "Kleinert",
    tags: ["Schriftführer"],
    email: "klaus.kleinert@svwalddorf.de",
    phone: ["+49 7127 21692"],
    image: { src: "/media/people/klaus-kleinert-2023.jpg", alt: "Klaus Kleinert", width: 355, height: 473 },
  },
  {
    firstname: "Martin",
    lastname: "Bayer",
    tags: ["Vorstand Finanzen"],
    email: "martin.bayer@svwalddorf.de",
    image: { src: "/media/people/martin-bayer-2023.jpg", alt: "Martin Bayer", width: 304, height: 406 },
  },
  {
    firstname: "Björn",
    lastname: "Kittelmann",
    tags: ["Vorstand Sport", "Trainer C-Junioren"],
    email: "bjoern.kittelmann@svwalddorf.de",
    phone: ["+49 1573 5646291"],
    image: { src: "/media/people/bjoern-kittelmann-2023.png", alt: "Björn Kittelmann", width: 771, height: 986 },
  },
  {
    firstname: "Jonas",
    lastname: "Tittmann",
    tags: ["Vorstand Anlagen und Inventar", "Spartenleitung Badminton"],
    email: "jonas.tittmann@svwalddorf.de",
    phone: ["+49 151 14364447"],
    image: { src: "/media/people/jonas-tittmann-2023.jpg", alt: "Jonas Tittmann", width: 363, height: 477 },
  },
  {
    firstname: "Julian",
    lastname: "Petermann",
    tags: ["Vorstand Ehrenamt", "Spartenleitung Badminton"],
    email: "julian.petermann@svwalddorf.de",
    phone: ["+49 152 32768874"],
    image: { src: "/media/people/julian-petermann-2023.jpg", alt: "Julian Petermann", width: 363, height: 481 },
  },
  {
    firstname: "Marc",
    lastname: "Bezner",
    tags: ["Vorstand Kommunikation"],
    email: "marc.bezner@svwalddorf.de",
    phone: ["+49 1520 8601071"],
    image: { src: "/media/people/marc-bezner-2023.jpg", alt: "Marc Bezner", width: 355, height: 473 },
  },
  {
    firstname: "Herta",
    lastname: "Wagner",
    tags: ["Geschäftsstelle"],
    email: "info@svwalddorf.de",
    phone: ["+49 7127 580015"],
  },
  {
    firstname: "Helga",
    lastname: "Bulke",
    tags: ["Spartenleitung Fitness & Gesundheit", "Übungsleitung Frauentanz"],
    email: "spartenleitungfitundgesund@svwalddorf.de",
    phone: ["+49 7127 31995"],
  },
  {
    firstname: "Ingrid",
    lastname: "Hartlieb",
    tags: ["Rehasport"],
    email: "rehasport@svwalddorf.de",
    phone: ["+49 7127 580676"],
    image: { src: "/media/people/ingrid-hartlieb-2023.jpg", alt: "Ingrid Hartlieb", width: 849, height: 1024 },
  },
  {
    firstname: "Antonino",
    lastname: "Bonfiglio",
    tags: ["Turnierorganisation", "Trainer F-Junioren (U9)"],
    email: "turniere@svwalddorf.de",
    phone: ["+49 162 9471662"],
    image: { src: "/media/people/antonino-bonfiglio-2021.png", alt: "Antonino Bonfiglio", width: 754, height: 773 },
  },
  {
    firstname: "Julian",
    lastname: "Wohlfahrt",
    tags: ["Sportliche Leitung Aktive und Jugendfußball", "Co-Trainer Aktive II"],
    email: "julian.wohlfarth@svwalddorf.de",
    phone: ["+49 173 7645542"],
    image: { src: "/media/people/julian-wohlfahrt-2022.png", alt: "Julian Wohlfahrt", width: 767, height: 1024 },
  },
  {
    firstname: "Sandra",
    lastname: "Kalestra",
    tags: ["Rehasport"],
    email: "rehasport@svwalddorf.de",
    phone: ["+49 7127 580676"],
    image: { src: "/media/people/sandra-kalestra-2023.png", alt: "Sandra Kalestra", width: 782, height: 1024 },
  },
  {
    firstname: "Lisa",
    lastname: "Stauch",
    tags: ["Rehasport"],
    email: "rehasport@svwalddorf.de",
    phone: ["+49 7127 580676"],
    image: { src: "/media/people/lisa-stauch-2023.jpg", alt: "Lisa Stauch", width: 1216, height: 1535 },
  },
  {
    firstname: "Silvana",
    lastname: "Kern",
    tags: ["Übungsleitung Fit und Gesund"],
    email: "silvana.kern@web.de",
    phone: ["+49 7127 18546"],
  },
  {
    firstname: "Monika",
    lastname: "Haar",
    tags: ["Übungsleitung Early Bird Yoga"],
    email: "monika.haar@svwalddorf.de",
  },
  {
    firstname: "Sandra",
    lastname: "Dießner",
    tags: ["Übungsleitung Hatha-Yoga"],
    email: "sandra.diessner@svwalddorf.de",
  },
  {
    firstname: "Andrea",
    lastname: "Troglauer",
    tags: ["Übungsleitung Powerfitness"],
    email: "andrea.troglauer@svwalddorf.de",
  },
  {
    firstname: "Bärbel",
    lastname: "Neumann",
    tags: ["Übungsleitung Gymnastik 65plus"],
    phone: ["+49 7127 70746"],
  },
  {
    firstname: "Ronja",
    lastname: "Mödinger",
    tags: ["Übungsleitung Teen Dance 2", "Übungsleitung Teen Dance 3"],
    email: "ronja.moedinger@svwalddorf.de",
    image: { src: "/media/people/ronja-moedinger-2023.png", alt: "Ronja Mödinger", width: 772, height: 835 },
  },
  {
    firstname: "Erol",
    lastname: "Türkoglu",
    tags: ["Trainer Aktive I"],
    image: { src: "/media/people/erol-tuerkoglu-2023.png", alt: "Erol Türkoglu", width: 582, height: 699 },
  },
  {
    firstname: "Luis",
    lastname: "Armbruster",
    tags: ["Co-Trainer Aktive I"],
    image: { src: "/media/people/luis-armbruster-2022.png", alt: "Luis Armbruster", width: 464, height: 576 },
  },
  {
    firstname: "Fabian",
    lastname: "Schramm",
    tags: ["Trainer Aktive II"],
    image: { src: "/media/people/fabian-schramm-2021.png", alt: "Fabian Schramm", width: 551, height: 735 },
  },
  {
    firstname: "Achim",
    lastname: "Wohlfahrt",
    tags: ["Betreuer Aktive I", "Betreuer Aktive II"],
    image: { src: "/media/people/achim-wohlfahrt-2021.png", alt: "Achim Wohlfahrt", width: 551, height: 734 },
  },
  {
    firstname: "Alex",
    lastname: "Paetzold",
    tags: ["Technischer Direktor B-Junioren"],
    phone: ["+49 172 9927344"],
    image: { src: "/media/people/alex-paetzold-2023.png", alt: "Alex Paetzold", width: 870, height: 1024 },
  },
  {
    firstname: "Steffen",
    lastname: "Kittelmann",
    tags: ["Trainer B-Junioren"],
    phone: ["+49 157 87995150"],
    image: { src: "/media/people/steffen-kittelmann-2023.png", alt: "Steffen Kittelmann", width: 870, height: 1024 },
  },
  {
    firstname: "Thomas",
    lastname: "Brülls",
    tags: ["Trainer B-Junioren"],
    phone: ["+49 151 70166622"],
    image: { src: "/media/people/thomas-bruells-2023.png", alt: "Thomas Brülls", width: 730, height: 927 },
  },
  {
    firstname: "Holger",
    lastname: "Schmid",
    tags: ["Trainer C-Junioren"],
    phone: ["+49 151 58259846"],
    image: { src: "/media/people/holger-schmid-2023.png", alt: "Holger Schmid", width: 839, height: 1024 },
  },
  {
    firstname: "Finn",
    lastname: "Kittelmann",
    tags: ["Athletiktrainer C-Junioren"],
    image: { src: "/media/people/finn-kittelmann-2023.png", alt: "Finn Kittelmann", width: 839, height: 1024 },
  },
  {
    firstname: "Uwe",
    lastname: "Laux",
    tags: ["Trainer C-Junioren"],
    image: { src: "/media/people/uwe-laux-2023.png", alt: "Uwe Laux", width: 839, height: 1024 },
  },
  {
    firstname: "Robin",
    lastname: "Schraitle",
    tags: ["Trainer C-Junioren"],
    image: { src: "/media/people/robin-schraitle-2020.png", alt: "Robin Schraitle", width: 557, height: 692 },
  },
  {
    firstname: "Stefan",
    lastname: "Bader",
    tags: ["Trainer D-Junioren"],
    phone: ["+49 170 7740115"],
    image: { src: "/media/people/stefan-bader-2023.png", alt: "Stefan Bader", width: 817, height: 1024 },
  },
  {
    firstname: "Chris",
    lastname: "Weiß",
    tags: ["Trainer D-Junioren"],
    phone: ["+49 176 64261278"],
    image: { src: "/media/people/chris-weiss-2023.png", alt: "Chris Weiß", width: 817, height: 1024 },
  },
  {
    firstname: "Torben",
    lastname: "Grotz",
    tags: ["Trainer D-Junioren"],
    phone: ["+49 152 29994676"],
    image: { src: "/media/people/torben-grotz-2023.png", alt: "Torben Grotz", width: 817, height: 1024 },
  },
  {
    firstname: "Hermann",
    lastname: "Saile",
    tags: ["Trainer D-Junioren"],
    phone: ["+49 7127 180636"],
    image: { src: "/media/people/hermann-saile-2023.png", alt: "Hermann Saile", width: 715, height: 1024 },
  },
  {
    firstname: "Leonardo",
    lastname: "Lombardi",
    tags: ["Trainer D-Junioren"],
    image: { src: "/media/people/leonardo-lombardi-2023.png", alt: "Leonardo Lombardi", width: 671, height: 845 },
  },
  {
    firstname: "Giovanni",
    lastname: "Cimmino",
    tags: ["Trainer D-Junioren", "Trainer Bambini"],
    image: { src: "/media/people/giovanni-cimmino-2023.png", alt: "Giovanni Cimmino", width: 709, height: 898 },
  },
  {
    firstname: "Branco",
    lastname: "Dominikovic",
    tags: ["Trainer D-Junioren"],
    image: { src: "/media/people/branco-dominikovic-2023.png", alt: "Branco Dominikovic", width: 745, height: 1024 },
  },
  {
    firstname: "Daniel",
    lastname: "Thomas",
    tags: ["Trainer E-Junioren"],
    phone: ["+49 175 7015441"],
    image: { src: "/media/people/daniel-thomas-2023.png", alt: "Daniel Thomas", width: 829, height: 998 },
  },
  {
    firstname: "Arif",
    lastname: "Akkoc",
    tags: ["Trainer E-Junioren"],
    phone: ["+49 170 4487003"],
    image: { src: "/media/people/arif-akkoc-2023.png", alt: "Arif Akkoc", width: 681, height: 904 },
  },
  {
    firstname: "Sabawun",
    lastname: "Khostwal",
    tags: ["Trainer E-Junioren"],
    image: { src: "/media/people/sabawun-khostwal-2023.png", alt: "Sabawun Khostwal", width: 704, height: 935 },
  },
  {
    firstname: "Yann",
    lastname: "Thomas",
    tags: ["Trainer E-Junioren"],
    image: { src: "/media/people/yann-thomas-2023.png", alt: "Yann Thomas", width: 670, height: 885 },
  },
  {
    firstname: "Timo",
    lastname: "Thomas",
    tags: ["Trainer E-Junioren"],
    image: { src: "/media/people/timo-thomas-2023.png", alt: "Timo Thomas", width: 620, height: 870 },
  },
  {
    firstname: "Yener",
    lastname: "Selcuk",
    tags: ["Trainer E-Junioren"],
    image: { src: "/media/people/yener-selcuk-2023.png", alt: "Yener Selcuk", width: 704, height: 935 },
  },
  {
    firstname: "Florian",
    lastname: "Schön",
    tags: ["Trainer F-Junioren (U9)"],
    image: { src: "/media/people/florian-schoen-2023.png", alt: "Florian Schön", width: 375, height: 448 },
  },
  {
    firstname: "Matthäus",
    lastname: "Mayer",
    tags: ["Trainer F-Junioren (U8)"],
    image: { src: "/media/people/matthaeus-mayer-2023.png", alt: "Matthäus Mayer", width: 857, height: 1024 },
  },
  {
    firstname: "Hannes",
    lastname: "Kopp",
    tags: ["Trainer F-Junioren (U8)"],
    image: { src: "/media/people/hannes-kopp-2023.png", alt: "Hannes Kopp", width: 800, height: 1024 },
  },
  {
    firstname: "Vincenzo",
    lastname: "Bonfiglio",
    tags: ["Trainer F-Junioren (U9)"],
    image: { src: "/media/people/vincenzo-bonfiglio-2023.png", alt: "Vincenzo Bonfiglio", width: 835, height: 1024 },
  },
  {
    firstname: "Ahmet",
    lastname: "Adsiz",
    tags: ["Trainer F-Junioren (U8)"],
    image: { src: "/media/people/ahmet-adsiz-2023.png", alt: "Ahmet Adsiz", width: 375, height: 460 },
  },
  {
    firstname: "Moritz",
    lastname: "Krämer",
    tags: ["Trainer Bambini"],
    image: { src: "/media/people/moritz-kraemer-2023.png", alt: "Moritz Krämer", width: 217, height: 253 },
  },
  {
    firstname: "Pietro",
    lastname: "D'Angelo",
    tags: ["Trainer Bambini"],
    image: { src: "/media/people/pietro-dangelo-2023.png", alt: "Pietro D'Angelo", width: 217, height: 253 },
  },
  {
    firstname: "Jörg",
    lastname: "Schlick",
    tags: ["Trainer Bambini"],
  },
  {
    firstname: "Daniel",
    lastname: "Sax",
    tags: ["Trainer Bambini"],
  },
  {
    firstname: "Sascha",
    lastname: "Flaig",
    tags: ["Trainer Bambini"],
  },
  {
    firstname: "Tobias",
    lastname: "Bayha",
    tags: ["Trainer Bambini"],
  },
  {
    firstname: "Lukas",
    lastname: "Drexler",
    tags: ["Leitung Freizeitfußball"],
    email: "hobbykicker@svwalddorf.de",
  },
  {
    firstname: "Anke",
    lastname: "Schaal",
    tags: ["Leitung Frauenfußball"],
    phone: ["+49 7127 974850"],
  },
  {
    firstname: "Melanie",
    lastname: "Senner",
    tags: ["Leitung Frauenfußball"],
    phone: ["+49 178 9778382"],
  },
];

export function getPersonByTag(tag: string) {
  return people.find((person) => person.tags.includes(tag));
}

export function getPersonsByTag(tag: string): Person[] {
  return people.filter((person) => person.tags.includes(tag));
}

export function getPersonByName(name: string) {
  return people.find((person) => getPersonName(person) === name);
}

export function getPersonName(person: Person) {
  return `${person.firstname} ${person.lastname}`;
}
