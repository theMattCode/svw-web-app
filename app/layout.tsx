import { club } from "#/content/club";
import { Metadata, Viewport } from "next";
import { JSX, PropsWithChildren } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: club.short,
    description: "Webseite von SV Walddorf 1904 e.V.",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#057DB1",
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return <>{children}</>;
}
