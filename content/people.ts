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
    tags: ["Vorstand Sport", "Trainer B-Junioren", "Trainer A-Junioren", "Vereinsschiedsrichter"],
    email: "bjoern.kittelmann@svwalddorf.de",
    phone: ["+49 1573 5646291"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1731583090/bjoern-kittelmann-2024_ofyik1.png",
      width: 750,
      height: 1000,
    },
  },
  {
    firstname: "Jonas",
    lastname: "Tittmann",
    tags: ["Vorstand Anlagen und Inventar", "Stellv. Spartenleitung Badminton", "Trainer Badminton"],
    email: "jonas.tittmann@svwalddorf.de",
    phone: ["+49 151 14364447"],
    image: { src: "/media/people/jonas-tittmann-2023.jpg", alt: "Jonas Tittmann", width: 363, height: 477 },
  },
  {
    firstname: "Julian",
    lastname: "Petermann",
    tags: ["Spartenleitung Badminton", "Trainer Badminton"],
    email: "julian.petermann@svwalddorf.de",
    phone: ["+49 152 32768874"],
    image: { src: "/media/people/julian-petermann-2023.jpg", alt: "Julian Petermann", width: 363, height: 481 },
  },
  {
    firstname: "Marc",
    lastname: "Bezner",
    tags: [],
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
    image: { src: "/media/people/ingrid-hartlieb-2023.png", alt: "Ingrid Hartlieb", width: 836, height: 883 },
  },
  {
    firstname: "Antonino",
    lastname: "Bonfiglio",
    tags: ["Trainer E-Junioren"],
    phone: ["+49 162 9471662"],
    image: { src: "/media/people/antonino-bonfiglio-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Julian",
    lastname: "Wohlfarth",
    tags: ["Sportliche Leitung Aktive und Jugendfußball", "Co-Trainer Aktive II"],
    email: "julian.wohlfarth@svwalddorf.de",
    phone: ["+49 173 7645542"],
    image: { src: "/media/people/julian-wohlfarth-2024.png", width: 2000, height: 2000 },
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
    image: { src: "/media/people/lisa-stauch-2023.jpg", width: 1216, height: 1535 },
  },
  {
    firstname: "Silvana",
    lastname: "Kern",
    tags: ["Übungsleitung Fit und Gesund"],
    email: "silvana.kern@web.de",
    phone: ["+49 7127 18546"],
    image: { src: "/media/people/silvana-kern-2024.png", width: 768, height: 1024 },
  },
  {
    firstname: "Monika",
    lastname: "Haar",
    tags: ["Spartenleitung Fitness und Gesundheitssport", "Übungsleitung Early Bird Yoga"],
    email: "monikahaar@yahoo.de",
    image: { src: "/media/people/monika-haar-2023.png", alt: "Monika Haar", width: 490, height: 677 },
  },
  {
    firstname: "Claudia",
    lastname: "Musse",
    tags: ["Spartenleitung Fitness und Gesundheitssport"],
    email: "spartenleitungFuG@svwalddorf.de",
    image: { src: "/media/people/claudia-musse-2023.png", alt: "Claudia Musse", width: 238, height: 295 },
  },
  {
    firstname: "Marc",
    lastname: "Musse",
    tags: ["Spartenleitung Fitness und Gesundheitssport", "Übungsleitung Steel Darts"],
    email: "spartenleitungFuG@svwalddorf.de",
    image: { src: "/media/people/marc-musse-2024.png", alt: "Marc Musse", width: 518, height: 547 },
  },
  {
    firstname: "Sandra",
    lastname: "Dießner",
    tags: ["Übungsleitung Hatha-Yoga"],
    email: "sandra.diessner@svwalddorf.de",
    image: { src: "/media/people/sandra-diessner-2024.png", width: 769, height: 1024 },
  },
  {
    firstname: "Andrea",
    lastname: "Troglauer",
    tags: ["Übungsleitung Powerfitness"],
    email: "andrea.troglauer@svwalddorf.de",
    image: { src: "/media/people/andrea-troglauer-2024.png", width: 768, height: 1024 },
  },
  {
    firstname: "Bärbel",
    lastname: "Neumann",
    tags: ["Übungsleitung Gymnastik 65plus"],
    phone: ["+49 7127 70746"],
    image: { src: "/media/people/baerbel-neumann-2024.png", width: 793, height: 742 },
  },
  {
    firstname: "Eva",
    lastname: "Marstaller",
    tags: ["Übungsleitung Gymnastik 65plus"],
  },
  {
    firstname: "Ronja",
    lastname: "Mödinger",
    tags: ["Übungsleitung Teen Dance 2", "Übungsleitung Teen Dance 3"],
    email: "ronja.moedinger@svwalddorf.de",
    image: { src: "/media/people/ronja-moedinger-2023.png", alt: "Ronja Mödinger", width: 772, height: 835 },
  },
  {
    firstname: "Benjamin",
    lastname: "Link",
    tags: ["Ansprechpartner AH", "Trainer A-Junioren"],
    phone: ["+49 1520 3845156"],
    image: { src: "/media/people/benjamin-link-2022.png", width: 451, height: 468 },
  },
  {
    firstname: "Sven",
    lastname: "Pichler",
    tags: ["Trainer Aktive I"],
    image: { src: "/media/people/sven-pichler-2024.png", alt: "Sven Pichler", width: 2000, height: 2000 },
  },
  {
    firstname: "Maurice",
    lastname: "Heim",
    tags: ["Co-Spielertrainer Aktive I"],
    image: { src: "/media/people/maurice-heim-2024.png", alt: "Maurice Heim", width: 2000, height: 2000 },
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
    image: { src: "/media/people/fabian-schramm-2024.png", width: 2000, height: 2000 },
  },
  {
    firstname: "Achim",
    lastname: "Wohlfarth",
    tags: ["Betreuer Aktive I", "Betreuer Aktive II"],
    image: { src: "/media/people/achim-wohlfarth-2024.png", width: 2000, height: 2000 },
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
    tags: [],
    phone: ["+49 157 87995150"],
    image: { src: "/media/people/steffen-kittelmann-2023.png", alt: "Steffen Kittelmann", width: 870, height: 1024 },
  },
  {
    firstname: "Thomas",
    lastname: "Brülls",
    tags: [],
    phone: ["+49 151 70166622"],
    image: { src: "/media/people/thomas-bruells-2023.png", alt: "Thomas Brülls", width: 730, height: 927 },
  },
  {
    firstname: "Holger",
    lastname: "Schmid",
    tags: ["Trainer B-Junioren", "Trainer A-Junioren"],
    phone: ["+49 151 58259846"],
    image: { src: "/media/people/holger-schmid-2023.png", alt: "Holger Schmid", width: 839, height: 1024 },
  },
  {
    firstname: "Finn",
    lastname: "Kittelmann",
    tags: ["Trainer B-Junioren", "Trainer A-Junioren", "Vereinsschiedsrichter"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1731583072/finn-kittelmann-2023_aq55tv.png",
      alt: "Finn Kittelmann",
      width: 760,
      height: 1024,
    },
  },
  {
    firstname: "Uwe",
    lastname: "Laux",
    tags: [],
    image: { src: "/media/people/uwe-laux-2023.png", alt: "Uwe Laux", width: 839, height: 1024 },
  },
  {
    firstname: "Robin",
    lastname: "Schraitle",
    tags: [],
    image: { src: "/media/people/robin-schraitle-2020.png", alt: "Robin Schraitle", width: 557, height: 692 },
  },
  {
    firstname: "Stefan",
    lastname: "Bader",
    tags: ["Ausrüstungskoordinator"],
    phone: ["+49 170 7740115"],
    image: { src: "/media/people/stefan-bader-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Chris",
    lastname: "Weiß",
    tags: ["Trainer C-Junioren"],
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
    image: { src: "/media/people/hermann-saile-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Leonardo",
    lastname: "Lombardi",
    tags: ["Trainer C-Junioren"],
    image: { src: "/media/people/leonardo-lombardi-2023.png", alt: "Leonardo Lombardi", width: 671, height: 845 },
  },
  {
    firstname: "Giovanni",
    lastname: "Cimmino",
    tags: ["Trainer C-Junioren", "Trainer F-Junioren"],
    image: { src: "/media/people/giovanni-cimmino-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Serkan",
    lastname: "Borhan",
    tags: ["Trainer F-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753471740/Serkan_Borhan_2025_uforut.png",
      width: 800,
      height: 1000,
    },
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
    tags: [],
    phone: ["+49 175 7015441"],
    image: { src: "/media/people/daniel-thomas-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Arif",
    lastname: "Akkoc",
    tags: ["Trainer D-Junioren"],
    phone: ["+49 170 4487003"],
    image: { src: "/media/people/arif-akkoc-2023.png", alt: "Arif Akkoc", width: 681, height: 904 },
  },
  {
    firstname: "Sabawun",
    lastname: "Khostwal",
    tags: [],
    image: { src: "/media/people/sabawun-khostwal-2023.png", alt: "Sabawun Khostwal", width: 704, height: 935 },
  },
  {
    firstname: "Yann",
    lastname: "Thomas",
    tags: [],
    image: { src: "/media/people/yann-thomas-2023.png", alt: "Yann Thomas", width: 670, height: 885 },
  },
  {
    firstname: "Timo",
    lastname: "Thomas",
    tags: [],
    image: { src: "/media/people/timo-thomas-2023.png", alt: "Timo Thomas", width: 620, height: 870 },
  },
  {
    firstname: "Yener",
    lastname: "Selcuk",
    tags: [],
    image: { src: "/media/people/yener-selcuk-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Tobias",
    lastname: "Rösch",
    tags: ["Trainer D-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753643755/Tobias_R%C3%B6sch_2025_qryyvq.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Mike",
    lastname: "Bauer",
    tags: ["Trainer D-Junioren"],
    image: { src: "/media/people/mike-bauer-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Florian",
    lastname: "Schön",
    tags: ["Trainer E-Junioren"],
    image: { src: "/media/people/florian-schoen-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Daniel",
    lastname: "Russom",
    tags: ["Trainer E-Junioren", "Ansprechpartner AH"],
    phone: ["+49 172 9089242"],
    image: { src: "/media/people/daniel-russom-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Matthäus",
    lastname: "Mayer",
    tags: ["Vorstand Kommunikation", "Trainer E-Junioren"],
    phone: ["+49 176 66332295"],
    email: "matthaeus.mayer@svwalddorf.de",
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1731583095/matthaeus-mayer-2024_anfdye.png",
      width: 750,
      height: 1000,
    },
  },
  {
    firstname: "Hannes",
    lastname: "Kopp",
    tags: ["Trainer E-Junioren"],
    image: { src: "/media/people/hannes-kopp-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Michael",
    lastname: "Opalla",
    tags: ["Trainer F-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753642123/Michael_Opalla_2025_uvqmxq.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Vincenzo",
    lastname: "Bonfiglio",
    tags: ["Trainer E-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753643268/Vincenzo_Bonfiglio_2025_tmeloi.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Erdem",
    lastname: "Cakir",
    tags: ["Trainer E-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753643471/Erdem_Cakir_2025_yfjmyc.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Markus",
    lastname: "Holmgren",
    tags: ["Trainer F-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753642122/Markus_Holmgren_2025_nrqhce.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Moritz",
    lastname: "Krämer",
    tags: ["Trainer F-Junioren"],
    image: { src: "/media/people/moritz-kraemer-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Pietro",
    lastname: "D'Angelo",
    tags:[],
    image: { src: "/media/people/pietro-dangelo-2023.png", alt: "Pietro D'Angelo", width: 217, height: 253 },
  },
  {
    firstname: "Jörg",
    lastname: "Schlick",
    tags: ["Trainer F-Junioren"],
    image: { src: "/media/people/joerg-schlick-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Daniel",
    lastname: "Sax",
    tags: ["Betreuer F-Junioren"],
    image: { src: "/media/people/daniel-sax-2024.png", width: 1000, height: 1000 },
  },
  {
    firstname: "Sascha",
    lastname: "Flaig",
    tags: ["Trainer F-Junioren"],
  },
  {
    firstname: "Marc",
    lastname: "Schneider",
    tags: ["Trainer F-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753642901/Marc_Schneider_2025_zviu8j.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Tobias",
    lastname: "Klees",
    tags: ["Trainer D-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753644219/Tobias_Klees_2025_qf9gkb.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Björn",
    lastname: "Schmidt",
    tags: ["Trainer D-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753644528/Bj%C3%B6rn_Schmidt_2025_bslhhk.png",
      width: 400,
      height: 500,
    },
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
  {
    firstname: "Rainer",
    lastname: "Burkhardt",
    tags: ["Übungsleitung Steel-Darts"],
    image: { src: "/media/people/rainer-burkhardt-2024.png", alt: "Rainer Burkhardt", width: 494, height: 536 },
  },
  {
    firstname: "Milena",
    lastname: "Heim",
    tags: ["Jugendtrainerin Badminton"],
    email: "milena.heim@svwalddorf.de",
  },
  {
    firstname: "Nadine",
    lastname: "Albrecht",
    tags: ["Kinder- und Jugendschutzbeauftragte"],
    email: "jugendschutz@svwalddorf.de",
    phone: ["+49 160 5042204"],
    image: { src: "/media/people/nadine-albrecht-2024.png", width: 720, height: 862 },
  },
  {
    firstname: "Georg",
    lastname: "Bantel",
    tags: ["Vereinsschiedsrichter"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1744834527/Georg_Bantel_l7gcmr.png",
      width: 170,
      height: 174,
    },
  },
  {
    firstname: "Fionn",
    lastname: "Fogl",
    tags: ["Vereinsschiedsrichter", "B-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1744903565/Fionn_Fogl_tkfsuu.png",
      width: 675,
      height: 899,
    },
  },
  {
    firstname: "Moritz",
    lastname: "Mayer",
    tags: ["Vereinsschiedsrichter", "B-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1744903356/Moritz_Mayer_hwuivq.png",
      width: 715,
      height: 954,
    },
  },
  {
    firstname: "Jannis",
    lastname: "Klees",
    tags: ["Vereinsschiedsrichter", "C-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1744836501/Jannis_Klees_d1piki.png",
      width: 413,
      height: 550,
    },
  },
  {
    firstname: "Peter",
    lastname: "Braun",
    tags: ["Vereinsschiedsrichter", "C-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1744836122/Peter_Braun_d5ea22.png",
      width: 441,
      height: 588,
    },
  },
  {
    firstname: "Benedikt",
    lastname: "Dehner",
    tags: ["Vereinsschiedsrichter", "B-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1744903056/Benedikt_Dehner_f0vnzt.png",
      width: 199,
      height: 287,
    },
  },
  {
    firstname: "Mika",
    lastname: "Kittelmann",
    tags: ["Vereinsschiedsrichter", "C-Junioren"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1744836880/Mika_Kittelmann_vdcrto.png",
      width: 480,
      height: 544,
    },
  },
  {
    firstname: "Mark-Christian",
    lastname: "Dehner",
    tags: ["Vorstand Ehrenamt", "Betreuer B-Junioren", "Betreuer A-Junioren"],
    phone: ["+49 172 7196906"],
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/c_crop,ar_3:4/v1744902145/Mark-Christian_Dehner_odcyty.png",
      width: 401,
      height: 534,
    },
  },
  {
    firstname: "Tao",
    lastname: "Qin",
    tags: ["Trainer Bambini"],
    email: "bambini@svwalddorf.de",
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753467496/Tao_Qin_2025_pxb3gx.png",
      width: 800,
      height: 1000,
    },
  },
  {
    firstname: "Dirk",
    lastname: "Brucklacher",
    tags: ["Trainer Bambini"],
    email: "bambini@svwalddorf.de",
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753470600/Dirk_Brucklacher_2025_oe1z35.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Hendrik",
    lastname: "Renninger",
    tags: ["Trainer Bambini"],
    email: "bambini@svwalddorf.de",
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753470765/Hendrik_Renninger_2025_iqss9i.png",
      width: 400,
      height: 500,
    },
  },
  {
    firstname: "Jasmin",
    lastname: "Echteler",
    tags: ["Trainerin Bambini"],
    email: "bambini@svwalddorf.de",
    image: {
      src: "https://res.cloudinary.com/svwalddorf/image/upload/v1753471252/Jasmin_Echteler_2025_sooeno.png",
      width: 500,
      height: 625,
    },
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
