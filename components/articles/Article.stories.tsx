import { Meta, StoryObj } from "@storybook/react";
import { Article } from "#/lib/graphql/generated";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";

const meta: Meta<typeof ArticleListItem> = {
  title: "Components/Articles",
  component: ArticleListItem,
};

export default meta;

type Story = StoryObj<typeof ArticleListItem>;

function createArticle(): Article {
  return {
    __typename: "Article",
    title: "Article Title",
    image: null,
    date: "2023-01-11T00:00:00.000Z",
    slug: "article-title",
    createdAt: "2023-01-12T12:34:00.000Z",
    publishedAt: "2023-01-12T12:34:56.000Z",
    updatedAt: "2023-01-13T01:23:00.000Z",
    promote: false,
    teaser:
      "Article Teaser - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  };
}

export const PreviewArticleWithoutImage: Story = {
  render: () => <ArticleListItem article={createArticle()} />,
};

export const PreviewArticleWithImage: Story = {
  render: () => {
    const article = createArticle();
    article.image = createUploadFileEntityResponse();
    return <ArticleListItem article={article} />;
  },
};
