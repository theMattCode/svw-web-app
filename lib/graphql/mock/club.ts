import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";
import { Club } from "#/lib/graphql/generated";

export function createClub(): Club {
  return {
    __typename: "Club",
    logo: createUploadFileEntityResponse(),
    emblem: createUploadFileEntityResponse(),
    name: "Sportverein Walddorf 1904 e.V.",
    address: "Weiherwiesen 5",
    postalCode: "72141",
    city: "Walddorfhäslach",
    email: "info@svwalddorf.de",
    telephone: "07024 123456",
    telefax: "07024 123457",
  };
}
