import { ArticleCarousel } from "#/components/carousel/ArticleCarousel";
import Markdown from "#/components/markdown/Markdown";
import { Spacing } from "#/components/spacing/Spacing";
import {
  BlockContentsDynamicZone,
  PageHeaderContentsDynamicZone,
  PageMainContentsDynamicZone,
} from "#/lib/graphql/generated";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { FussballDeWidget } from "#/components/widget/Fussball.de";
import { ArticleList } from "#/components/articles/ArticleList";
import { Params, SearchParams } from "#/lib/url";
import RichTextTwoColumn from "#/components/markdown/RichTextTwoColumn";

type Props = {
  component: PageHeaderContentsDynamicZone | PageMainContentsDynamicZone | BlockContentsDynamicZone;
  params?: Params;
  searchParams?: SearchParams;
};

export function DynamicContent({ component, params, searchParams }: Props): JSX.Element | null {
  switch (component.__typename) {
    case "ComponentBlockCarousel":
      /* @ts-expect-error Server Component */
      return <ArticleCarousel maxItems={component.maxArticles ?? 3} />;

    case "ComponentBlockRichText":
      return <Markdown content={component.content} />;

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

    case "ComponentBlockArticlesPreviewList":
      /* @ts-expect-error Server Component */
      return <ArticlePreviewList pageSize={component.pageSize} />;

    case "ComponentBlockArticles": {
      const page = Number.parseInt(searchParams?.page ?? "1");
      return (
        /* @ts-expect-error Server Component */
        <ArticleList pageSize={component.pageSize} tags={component.tags} page={page} slug={params?.slug} />
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
