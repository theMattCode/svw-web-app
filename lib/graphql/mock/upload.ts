import { UploadFile } from "../generated";

export function createPlaceholderUploadFile(): UploadFile {
  return {
    __typename: "UploadFile",
    url: "/placeholder.svg",
    alternativeText: "Placeholder",
    size: 1775,
    width: 250,
    height: 250,
    mime: "image/svg+xml",
    name: "placeholder.svg",
    hash: "placeholder",
    provider: "local",
  };
}
