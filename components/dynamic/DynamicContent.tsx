import { Carousel } from "#/components/carousel/Carousel";
import RichText from "#/components/richtext/RichText";
import { Spacing } from "#/components/spacing/Spacing";
import {
  PageHeaderContentsDynamicZone,
  PageLeftContentsDynamicZone,
  PageMainContentsDynamicZone,
  PageMegaMenuContentsDynamicZone,
  PageRightContentsDynamicZone,
} from "#/lib/graphql/generated";
import { TaggedPersons } from "#/components/person/TaggedPersons";
import { PreviewList } from "#/components/articles/PreviewList";
import { LinkList } from "#/components/linklist/LinkList";
import FussballDeWidget from "#/components/widget/Fussball.de";

type Props = {
  component:
    | PageHeaderContentsDynamicZone
    | PageMainContentsDynamicZone
    | PageLeftContentsDynamicZone
    | PageRightContentsDynamicZone
    | PageMegaMenuContentsDynamicZone;
};

export function DynamicContent({ component }: Props): JSX.Element | null {
  switch (component.__typename) {
    case "ComponentBlockCarousel":
      /* @ts-expect-error Server Component */
      return <Carousel maxItems={component.maxArticles ?? 3} />;

    case "ComponentBlockRichText":
      return <RichText content={component.content} />;

    case "ComponentSharedSpacing":
      return <Spacing width={component.width} height={component.height} />;

    case "ComponentBlockPersons":
      return <div>{component.person?.data?.attributes?.lastname}</div>;

    case "ComponentBlockTaggedPersons":
      /* @ts-expect-error Server Component */
      return <TaggedPersons tagId={component.tag?.data?.id ?? null} />;

    case "ComponentBlockArticles":
      /* @ts-expect-error Server Component */
      return <PreviewList pageSize={component.pageSize} />;

    case "ComponentSharedLinkLists":
      return <LinkList linkList={component} />;

    case "ComponentSharedFussballDeWidget":
      return <FussballDeWidget widgetKey={component.key} />;

    case "Error":
      console.error(JSON.stringify(component, null, 2));
      return null;

    default:
      return <>Unknown: {component.__typename}</>;
  }
}
