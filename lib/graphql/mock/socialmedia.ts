import { ComponentSharedSocialMedia } from "../generated";
import { createPlaceholderUploadFile } from "./upload";

type SocialMediaVariables = {
  id: string;
  name: string;
};
export function createComponentSharedSocialMedia(
  variables: SocialMediaVariables
): ComponentSharedSocialMedia {
  return {
    __typename: "ComponentSharedSocialMedia",
    id: variables.id,
    name: variables.name,
    icon: {
      __typename: "UploadFileEntityResponse",
      data: {
        __typename: "UploadFileEntity",
        attributes: createPlaceholderUploadFile(),
      },
    },
  };
}
