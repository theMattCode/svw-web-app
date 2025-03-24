import {
    aktuelles,
    ansprechpartner,
    badminton,
    beitragsordnung,
    datenschutz,
    fitnessUndGesundheitssport,
    formales,
    fussball,
    geschaeftsordnung,
    geschaeftsstelle,
    historie,
    impressum,
    jugendschutzordnung,
    mitgliedWerden,
    rehasport,
    satzung,
    sparten,
    sponsoring,
    sportgaststaette,
    svwBlaettle,
    veranstaltungen,
    verein,
    vorstand,
} from "#/content/sitemap";
import {Link} from "#/content/link";

type Footer = {
  blocks: {
    title: string;
    links: Link[];
  }[];
};
export const footer: Footer = {
  blocks: [
    {
      title: "SVW Welt",
      links: [
        { title: aktuelles.name, url: aktuelles.url },
        {
          title: "SVW Aktive Shop",
          url: "https://verein.baechi-teamsport.de/SV-Walddorf-Aktive",
          extern: true,
        },
        {
          title: "SVW Shop",
          url: "https://verein.baechi-teamsport.de/SV-Walddorf",
          extern: true,
        },
        {
          title: "Schönbuch United Shop",
          url: "https://verein.baechi-teamsport.de/Schoenbuch-United",
          extern: true,
        },
      ],
    },
    {
      title: verein.name,
      links: [
        { title: vorstand.name, url: vorstand.url },
        { title: geschaeftsstelle.name, url: geschaeftsstelle.url },
        { title: sportgaststaette.name, url: sportgaststaette.url },
        { title: ansprechpartner.name, url: ansprechpartner.url },
        { title: svwBlaettle.name, url: svwBlaettle.url },
        { title: sponsoring.name, url: sponsoring.url },
        { title: mitgliedWerden.name, url: mitgliedWerden.url },
        { title: veranstaltungen.name, url: veranstaltungen.url },
        { title: historie.name, url: historie.url },
      ],
    },
    {
      title: sparten.name,
      links: [
        { title: fussball.name, url: fussball.url },
        { title: badminton.name, url: badminton.url },
        { title: fitnessUndGesundheitssport.name, url: fitnessUndGesundheitssport.url },
        { title: rehasport.name, url: rehasport.url },
      ],
    },
    {
      title: formales.name,
      links: [
        { title: satzung.name, url: satzung.url },
          { title: geschaeftsordnung.name, url: geschaeftsordnung.url},
          {title: beitragsordnung.name, url: beitragsordnung.url},
          {title: jugendschutzordnung.name, url: jugendschutzordnung.url},
        { title: impressum.name, url: impressum.url },
        { title: datenschutz.name, url: datenschutz.url },
      ],
    },
  ],
};
