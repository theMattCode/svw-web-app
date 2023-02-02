import { Enum_Componentsharedlink_Target, HomepageQuery } from "../generated";
import { createComponentSharedLink } from "./link";
import { createComponentSharedSocialMedia } from "./socialmedia";

export type Graph = HomepageQuery;

export function createGraph(): Graph {
  return {
    homepage: {
      __typename: "HomepageEntityResponse",
      data: {
        __typename: "HomepageEntity",
        id: "homepage-entity-id",
        attributes: {
          __typename: "Homepage",
          contact: {
            __typename: "ComponentGlobalContact",
            id: "component-global-contact-id",
            name: "Sportverein Walddorf 1904 e.V.",
            street: "Weiherwiesen 5",
            postalCode: "76543",
            city: "Walddorfhäslach",
            telephone: "+65 4321 234567",
            telefax: "+65 4321 234568",
            email: "info@svwalddorf.de",
          },
          socialMedia: [
            createComponentSharedSocialMedia({
              id: "component-shared-social-media-id-1",
              name: "Facebook",
            }),
            createComponentSharedSocialMedia({
              id: "component-shared-social-media-id-2",
              name: "Instagram",
            }),
          ],
          footer: {
            __typename: "ComponentGlobalFooter",
            id: "component-global-footer-id",
            labelLeft: "© Sportverein Walddorf 1904 e.V.",
            labelRight: "Alle Rechte vorbehalten.",
            linkLists: [
              {
                __typename: "ComponentSharedLinkLists",
                id: "component-shared-link-lists-id-1",
                title: "SVW Welt",
                links: [
                  createComponentSharedLink({
                    id: "list-1-link-id-1",
                    href: "/aktuelles",
                    text: "Aktuelles",
                  }),
                  createComponentSharedLink({
                    id: "list-1-link-id-2",
                    href: "/veranstaltungen",
                    text: "Veranstaltungen",
                  }),
                  createComponentSharedLink({
                    id: "list-1-link-id-3",
                    href: "https://verein.baechi-teamsport.de/SV-Walddorf-Aktive",
                    text: "Vereinsshop SVW Aktive",
                    isExternal: true,
                    target: Enum_Componentsharedlink_Target.Blank,
                  }),
                  createComponentSharedLink({
                    id: "list-1-link-id-4",
                    href: "https://verein.erima-cjd-shop.de/SV-Walddorf",
                    text: "Vereinsshop SVW",
                    isExternal: true,
                    target: Enum_Componentsharedlink_Target.Blank,
                  }),
                  createComponentSharedLink({
                    id: "list-1-link-id-5",
                    href: "https://verein.baechi-teamsport.de/Schoenbuch-United",
                    text: "Shop Schönbuch United",
                    isExternal: true,
                    target: Enum_Componentsharedlink_Target.Blank,
                  }),
                ],
              },
              {
                __typename: "ComponentSharedLinkLists",
                id: "component-shared-link-lists-id-2",
                title: "SV Walddorf",
                links: [
                  createComponentSharedLink({
                    id: "list-2-link-id-1",
                    href: "/verein",
                    text: "Verein",
                  }),
                ],
              },
              {
                __typename: "ComponentSharedLinkLists",
                id: "component-shared-link-lists-id-3",
                title: "Formales",
                links: [
                  createComponentSharedLink({
                    id: "list-3-link-id-1",
                    href: "/impressum",
                    text: "Impressum",
                  }),
                  createComponentSharedLink({
                    id: "list-3-link-id-2",
                    href: "/datenschutz",
                    text: "Datenschutz",
                  }),
                ],
              },
            ],
          },
        },
      },
    },
  };
}

export const defaultGraph = createGraph();
