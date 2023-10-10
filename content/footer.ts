type Footer = {
  blocks: {
    title: string;
    links: {
      title: string;
      url: string;
      extern?: boolean;
    }[];
  }[];
};
export const footer: Footer = {
  blocks: [
    {
      title: "SVW Welt",
      links: [
        { title: "Aktuelles", url: "/aktuelles" },
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
      title: "Verein",
      links: [
        { title: "Vorstand", url: "/vorstand" },
        { title: "Geschäftsstelle", url: "/geschaeftsstelle" },
        { title: "Sportgaststätte", url: "/sportgaststaette" },
        { title: "Ansprechpartner", url: "/ansprechpartner" },
        { title: "s'SVW Blättle", url: "/svw-blaettle" },
        { title: "Spenden und Sponsoring", url: "/spenden-und-sponsoring" },
        { title: "Mitglied werden", url: "/mitglied-werden" },
        { title: "Veranstaltungen", url: "/veranstaltungen" },
        { title: "Historie", url: "/historie" },
      ],
    },
    {
      title: "Sparten",
      links: [
        { title: "Fußball", url: "/fussball" },
        { title: "Badminton", url: "/badminton" },
        {
          title: "Fitness & Gesundheitssport",
          url: "/fitness-und-gesundheitssport",
        },
        { title: "Reha-Sport", url: "/rehasport" },
      ],
    },
    {
      title: "Formales",
      links: [
        { title: "Satzung", url: "/satzung" },
        { title: "Impressum", url: "/impressum" },
        { title: "Datenschutz", url: "/datenschutz" },
      ],
    },
  ],
};
