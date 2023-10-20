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
    image: {
      src: "/media/people/markus-hartlieb-2023.jpg",
      alt: "Markus Hartlieb",
      width: 363,
      height: 477,
    },
  },
  {
    firstname: "Andrea",
    lastname: "Speier",
    tags: ["2. Vorsitzende", "Übungsleitung Teen Dance 1"],
    email: "andrea.speier@svwalddorf.de",
    phone: ["+49 171 5775846"],
    image: {
      src: "/media/people/andrea-speier-2023.jpg",
      alt: "Andrea Speier",
      width: 193,
      height: 256,
    },
  },
  {
    firstname: "Klaus",
    lastname: "Kleinert",
    tags: ["Schriftführer"],
    email: "klaus.kleinert@svwalddorf.de",
    phone: ["+49 7127 21692"],
    image: {
      src: "/media/people/klaus-kleinert-2023.jpg",
      alt: "Klaus Kleinert",
      width: 355,
      height: 473,
    },
  },
  {
    firstname: "Martin",
    lastname: "Bayer",
    tags: ["Vorstand Finanzen"],
    email: "martin.bayer@svwalddorf.de",
    image: {
      src: "/media/people/martin-bayer-2023.jpg",
      alt: "Martin Bayer",
      width: 304,
      height: 406,
    },
  },
  {
    firstname: "Björn",
    lastname: "Kittelmann",
    tags: ["Vorstand Sport", "Trainer C-Junioren"],
    email: "bjoern.kittelmann@svwalddorf.de",
    phone: ["+49 1573 5646291"],
    image: {
      src: "/media/people/bjoern-kittelmann-2022.jpg",
      alt: "Björn Kittelmann",
      width: 363,
      height: 481,
    },
  },
  {
    firstname: "Jonas",
    lastname: "Tittmann",
    tags: ["Vorstand Anlagen und Inventar", "Spartenleitung Badminton"],
    email: "jonas.tittmann@svwalddorf.de",
    phone: ["+49 151 14364447"],
    image: {
      src: "/media/people/jonas-tittmann-2023.jpg",
      alt: "Jonas Tittmann",
      width: 363,
      height: 477,
    },
  },
  {
    firstname: "Julian",
    lastname: "Petermann",
    tags: ["Vorstand Ehrenamt", "Spartenleitung Badminton"],
    email: "julian.petermann@svwalddorf.de",
    phone: ["+49 152 32768874"],
    image: {
      src: "/media/people/julian-petermann-2023.jpg",
      alt: "Julian Petermann",
      width: 363,
      height: 481,
    },
  },
  {
    firstname: "Marc",
    lastname: "Bezner",
    tags: ["Vorstand Kommunikation"],
    email: "marc.bezner@svwalddorf.de",
    phone: ["+49 1520 8601071"],
    image: {
      src: "/media/people/marc-bezner-2023.jpg",
      alt: "Marc Bezner",
      width: 355,
      height: 473,
    },
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
    image: {
      src: "/media/people/ingrid-hartlieb-2023.jpg",
      alt: "Ingrid Hartlieb",
      width: 849,
      height: 1024,
    },
  },
  {
    firstname: "Antonino",
    lastname: "Bonfiglio",
    tags: ["Turnierorganisation", "Trainer F-Junioren"],
    email: "turniere@svwalddorf.de",
    phone: ["+49 162 9471662"],
  },
  {
    firstname: "Julian",
    lastname: "Wohlfarth",
    tags: ["Sportliche Leitung Aktive und Jugendfußball", "Co-Trainer Aktive II"],
    email: "julian.wohlfarth@svwalddorf.de",
    phone: ["+49 173 7645542"],
    image: {
      src: "/media/people/julian-wohlfahrt-2022.jpg",
      alt: "Julian Wohlfarth",
      width: 1547,
      height: 2063,
    },
  },
  {
    firstname: "Sandra",
    lastname: "Kalestra",
    tags: ["Rehasport"],
    email: "rehasport@svwalddorf.de",
    phone: ["+49 7127 580676"],
    image: {
      src: "/media/people/sandra-kalestra-2023.jpg",
      alt: "Sandra Kalestra",
      width: 1309,
      height: 1713,
    },
  },
  {
    firstname: "Lisa",
    lastname: "Stauch",
    tags: ["Rehasport"],
    email: "rehasport@svwalddorf.de",
    phone: ["+49 7127 580676"],
    image: {
      src: "/media/people/lisa-stauch-2023.jpg",
      alt: "Lisa Stauch",
      width: 1216,
      height: 1535,
    },
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
    image: {
      src: "/media/people/ronja-moedinger-2023.jpg",
      alt: "Ronja Mödinger",
      width: 796,
      height: 1116,
    },
  },
];

export function getPersonByTag(tag: string) {
  return people.find((person) => person.tags.includes(tag));
}

export function getPersonByName(name: string) {
  return people.find((person) => getPersonName(person) === name);
}

export function getPersonName(person: Person) {
  return `${person.firstname} ${person.lastname}`;
}
