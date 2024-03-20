/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "svw.uber.space",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  async redirects() {
    const redirects = [
      {
        source: "/der-verein/veranstaltungen/9m-turnier",
        destination: "/event/2024-01-13-9m-turnier",
        permanent: true,
      },
      {
        source: "/der-verein/neuigkeiten-und-berichte",
        has: [{ type: "query", key: "cHash", value: "5965e52c0f5f2257494cd96e040b8135" }],
        destination: "/article/2023-08-14-wiedereroeffnung-sportgaststaette-weiherwiesen",
        permanent: true,
      },
      {
        source: "/der-verein/neuigkeiten-und-berichte",
        has: [{ type: "query", key: "cHash", value: "531eb1222319725cd30074581f3d7bec" }],
        destination: "/article/2023-06-25-relegationsspiel-am-25-juni-1200-zuschauer-in-den-weiherwiesen",
        permanent: true,
      },
      {
        source: "/der-verein/neuigkeiten-und-berichte",
        has: [{ type: "query", key: "cHash", value: "16ef198e337db18f897b69be3222f49c" }],
        destination: "/article/2023-06-22-informationen-zum-relegationsspiel-sv-wurmlingen-fc-roemerstein",
        permanent: true,
      },
      {
        source: "/der-verein/neuigkeiten-und-berichte",
        has: [{ type: "query", key: "cHash", value: "1e7f109bd41aabef87d0f11c03d78401" }],
        destination: "/article/2023-06-06-herzlichen-dank-fuer-herausragendes-vereins-engagement",
        permanent: true,
      },
      {
        source: "/der-verein/neuigkeiten-und-berichte",
        has: [{ type: "query", key: "cHash", value: "07ed940a1cfe55690e0a98f177f9bb64" }],
        destination: "/article/2023-06-01-ronja-unsere-neue-uebungsleiterin-im-teendance",
        permanent: true,
      },
      {
        source: "/der-verein/neuigkeiten-und-berichte",
        has: [{ type: "query", key: "cHash", value: "86fd9465e8d7a1bdff1e520abc7d297e" }],
        destination: "/article/2023-03-31-trainerwechsel-bei-unserer-ersten-mannschaft",
        permanent: true,
      },
      {
        source: "/fileadmin/user_upload/2023/2023-07-23_Mitteilungsblatt_S3_ganze_Seite.pdf",
        destination: "/download/2023-07-23_Sportwoche_des_SV_Walddorf.pdf",
        permanent: true,
      },
      {
        source: "/fussball/aktive-2",
        destination: "/fussball/aktive",
        permanent: true,
      },
      {
        source: "/fussball/hobbykicker-/-ah",
        destination: "/fussball/hobbykicker",
        permanent: true,
      },
      {
        source: "/fussball/damen",
        destination: "/fussball/frauen",
        permanent: true,
      },
    ];

    if (process.env.NODE_ENV !== "development") {
      redirects.push({
        source: "/cms",
        destination: "/",
        permanent: true,
      });
    }

    return redirects;
  },
};

module.exports = nextConfig;
