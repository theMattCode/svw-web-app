import { ArticleCarousel } from "#/components/carousel/ArticleCarousel";
import RichText from "#/components/richtext/RichText";
import { Spacing } from "#/components/spacing/Spacing";
import {
  PageHeaderContentsDynamicZone,
  PageMainContentsDynamicZone,
} from "#/lib/graphql/generated";
import { TaggedPersons } from "#/components/person/TaggedPersons";
import { PreviewList } from "#/components/articles/PreviewList";
import { FussballDeWidget } from "#/components/widget/Fussball.de";
import { ArticleList } from "#/components/articles/ArticleList";
import { Params, SearchParams } from "#/lib/url";
import { Person } from "#/components/person/Person";
import RichTextTwoColumn from "#/components/richtext/RichTextTwoColumn";
import { Announcements } from "#/components/announcements/Announcements";

type Props = {
  component: PageHeaderContentsDynamicZone | PageMainContentsDynamicZone;
  params?: Params;
  searchParams?: SearchParams;
};

export function DynamicContent({
  component,
  params,
  searchParams,
}: Props): JSX.Element | null {
  switch (component.__typename) {
    case "ComponentBlockCarousel":
      /* @ts-expect-error Server Component */
      return <ArticleCarousel maxItems={component.maxArticles ?? 3} />;

    case "ComponentBlockRichText":
      return <RichText content={component.content} />;

    case "ComponentBlockRichTextTwoColumn":
      return (
        <RichTextTwoColumn
          leftContent={component.leftContent}
          rightContent={component.rightContent}
          leftFraction={component.leftFraction}
          rightFraction={component.rightFraction}
        />
      );

    case "ComponentSharedSpacing":
      return <Spacing width={component.width} height={component.height} />;

    case "ComponentBlockPersons":
      return <Person person={component.person?.data ?? null} />;

    case "ComponentBlockTaggedPersons":
      /* @ts-expect-error Server Component */
      return <TaggedPersons tagId={component.tag?.data?.id ?? null} />;

    case "ComponentBlockAnnouncements":
      return (
        /* @ts-expect-error Server Component */
        <Announcements title={component.title} tags={component.tags?.data} />
      );

    case "ComponentBlockArticlesPreviewList":
      /* @ts-expect-error Server Component */
      return <PreviewList pageSize={component.pageSize} />;

    case "ComponentBlockArticles": {
      const page = Number.parseInt(searchParams?.page ?? "1");
      return (
        /* @ts-expect-error Server Component */
        <ArticleList
          pageSize={component.pageSize}
          tags={component.tags}
          page={page}
          slug={params?.slug}
        />
      );
    }

    case "ComponentSharedFussballDeWidget":
      return <FussballDeWidget widgetKey={component.key} />;

    case "Error":
      console.error(JSON.stringify(component, null, 2));
      return null;

    default:
      return <>Unknown: {component.__typename}</>;
  }
}
