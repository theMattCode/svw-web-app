import { UploadFile, UploadFileEntityResponse } from "../generated";
import placeholderSvg from "#/public/placeholder.svg";

export function createPlaceholderUploadFile(
  uploadFile: Partial<UploadFile> = {}
): UploadFile {
  return {
    __typename: "UploadFile",
    url: uploadFile.url ?? placeholderSvg.src,
    width: uploadFile.width ?? 100,
    height: uploadFile.height ?? 100,
    provider: uploadFile.provider ?? "local",
    size: uploadFile.size ?? 100,
    mime: "image/svg+xml",
    name: uploadFile.name ?? "placeholder.svg",
    hash: uploadFile.hash ?? "",
  };
}

export function createUploadFileEntityResponse(
  uploadFile: Partial<UploadFile> = {}
): UploadFileEntityResponse {
  return {
    __typename: "UploadFileEntityResponse",
    data: {
      __typename: "UploadFileEntity",
      id: `placeholder-id`,
      attributes: createPlaceholderUploadFile(uploadFile),
    },
  };
}
