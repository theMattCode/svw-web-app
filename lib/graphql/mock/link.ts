import {
  ComponentSharedLink,
  Enum_Componentsharedlink_Target,
} from "../generated";

export function createComponentSharedLink(
  props: Partial<ComponentSharedLink>
): ComponentSharedLink {
  return {
    __typename: "ComponentSharedLink",
    id: "link-id-undefined",
    href: "/undefined",
    isExternal: false,
    isDownload: false,
    target: Enum_Componentsharedlink_Target.Self,
    icon: null,
    ...props,
  };
}
