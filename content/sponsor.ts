import { ImageDimensions } from "#/lib/image";

export type Sponsor = {
  name: string;
  url: string | null;
  image: { url: string } & ImageDimensions;
};
export const sponsors: Sponsor[] = [
  {
    name: "Kaufmann",
    url: "https://www.kaufmann-neuheiten.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754892158/kaufmann_2025_wi6qag.jpg",
      width: 800,
      height: 533,
    },
  },
  {
    name: "Fürstenberg",
    url: "https://www.paulaner-gruppe.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754975324/paulaner-2025_m2ehp6.jpg",
      width: 800,
      height: 450,
    },
  },
  {
    name: "Digiwerk GmbH",
    url: "https://www.digiwerk.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754892601/digiwerk_2025_agukqe.jpg",
      width: 800,
      height: 533,
    },
  },
  {
    name: "Baechi Teamsport",
    url: "https://baechi-teamsport.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893426/baechi_teamsport_2025-2_xzivim.jpg",
      width: 1024,
      height: 294,
    },
  },
  {
    name: "KOCHER+BECK GMBH",
    url: "https://www.kocher-beck.com/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893540/kocher_beck_gmbh_ij3cq4.jpg",
      width: 408,
      height: 133,
    },
  },
  {
    name: "Getränke Schwab",
    url: "http://www.getraenke-schwab.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893678/getraenke_schwab_2025_r6p7zt.jpg",
      width: 800,
      height: 569,
    },
  },
  {
    name: "Karosserie Böpple",
    url: "http://www.karosserie-boepple.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893543/karosserie_boepple_yk8alc.jpg",
      width: 535,
      height: 248,
    },
  },
  {
    name: "JMS Fahrzeugteile",
    url: "https://www.jms-fahrzeugteile.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893807/jms-2024_uiqdyr.jpg",
      width: 800,
      height: 450,
    },
  },
  {
    name: "NECKER GmbH",
    url: "https://necker.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893893/necker-gmbh-2024_aoperi.jpg",
      width: 800,
      height: 400,
    },
  },
  {
    name: "Pizzeria Linde",
    url: "https://pizzeria-linde.jimdosite.com/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893561/pizzeria_linde_euvang.jpg",
      width: 823,
      height: 541,
    },
  },
  {
    name: "WVS Immobilien GmbH",
    url: "https://wvs-immo.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893567/wvs_immobilien_gmbh_gn0uwv.png",
      width: 317,
      height: 136,
    },
  },
  {
    name: "Böpple - Die Fahrzeuglackierer",
    url: "https://die-fahrzeuglackierer.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893483/boepple_die_fahrzeuglackierer_efpbbp.jpg",
      width: 745,
      height: 360,
    },
  },
  {
    name: "KA Möbel Systeme - Olfert Alter e.K.",
    url: "http://www.ka-moebel.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754894228/ka_moebel_systeme_2025_oxl7ll.jpg",
      width: 800,
      height: 188,
    },
  },
  {
    name: "Gebr. Dürr GmbH",
    url: "http://duerr-landtechnik.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893531/gebr_duerr_gmbh_aml9tn.jpg",
      width: 640,
      height: 176,
    },
  },
  {
    name: "ZDS Bürosysteme Vertrieb & Service GmbH",
    url: "https://www.zds-gmbh.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893480/zds_buerosysteme_gmbh_wx6nuv.jpg",
      width: 420,
      height: 216,
    },
  },
  {
    name: "Finanz- und Versicherungsmakler Thomas Breuer",
    url: null,
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893532/ftb_w7wfsy.png",
      width: 323,
      height: 75,
    },
  },
  {
    name: "Alexander Armbruster Kfz-Meisterbetrieb",
    url: "https://bosch-service-armbruster.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893481/armbruster_kfz_uyydlm.jpg",
      width: 828,
      height: 360,
    },
  },
  {
    name: "Heim Tief- und Straßenbau GmbH",
    url: "http://www.heim-strassenbau.com/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893503/heim_gmbh_t54lqw.png",
      width: 397,
      height: 214,
    },
  },
  {
    name: "Stahl Gruppe",
    url: "http://www.stahl-firmengruppe.com/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893564/stahl_gruppe_lawsj3.svg",
      width: 880,
      height: 360,
    },
  },
  {
    name: "Eckardt & Eckardt Rechtsanwaltskanzlei",
    url: null,
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893534/eckardt_und_eckardt_rechtsanwaltskanzlei_kn1xvy.jpg",
      width: 800,
      height: 305,
    },
  },
  {
    name: "PATAVO GmbH",
    url: "https://www.patavo.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893562/patavo_gmbh_tmcq2v.png",
      width: 338,
      height: 225,
    },
  },
  {
    name: "Walters Eismobil",
    url: "https://www.facebook.com/profile.php?id=100057222108789",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893575/walters_eismobil_ydyqwc.png",
      width: 338,
      height: 225,
    },
  },
  {
    name: "Optik Girke",
    url: "https://www.optik-girke.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893552/optik_girke_u1spb1.png",
      width: 338,
      height: 225,
    },
  },
  {
    name: "Rebmann Vereinsbedarf",
    url: "http://rebmann-vereinsbedarf.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893551/rebmann_vereinsbedarf_fyxbqz.png",
      width: 338,
      height: 225,
    },
  },
  {
    name: "Skurril Hairstyling",
    url: null,
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893544/skurril_hairstyling-2024_ar1vlu.jpg",
      width: 1024,
      height: 662,
    },
  },
  {
    name: "Kreissparkasse Reutlingen",
    url: "https://www.ksk-reutlingen.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893541/ksk-rt_vrml13.jpg",
      width: 710,
      height: 273,
    },
  },
  {
    name: "Stadelmaier Immobilien",
    url: "https://www.stadelmaier-immobilien.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893554/stadelmeier-immo_v6slsa.svg",
      width: 241,
      height: 137,
    },
  },
  {
    name: "Zahnarztpraxis Geigle Wörner",
    url: "https://zahnaerzte-gw.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893569/zahnarztpraxis-geigle-woerner_hujywp.png",
      width: 400,
      height: 140,
    },
  },
  {
    name: "Sportgaststätte Weiherwiesen",
    url: "https://sportgaststätte-weiherwiesen.de/",
    image: {
      url: "https://res.cloudinary.com/svwalddorf/image/upload/v1754893555/sportgaststaette-weiherwiesen_ljuboe.png",
      width: 768,
      height: 143,
    },
  },
];
