import { Meta, StoryObj } from "@storybook/react";
import { PreviewCard } from "#/components/articles/PreviewCard";
import { Article } from "#/lib/graphql/generated";
import placeholderSvg from "#/public/placeholder.svg";

const meta: Meta<typeof PreviewCard> = {
  title: "Components/Articles",
  component: PreviewCard,
};

export default meta;

type Story = StoryObj<typeof PreviewCard>;

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
    teaser: "Article Teaser",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  };
}

export const PreviewCardWithoutImage: Story = {
  render: () => (
    <div className="bg-neutral-200 p-5 w-96">
      <PreviewCard article={createArticle()} />
    </div>
  ),
};

export const PreviewCardWithImage: Story = {
  render: () => {
    const article = createArticle();
    article.image = {
      __typename: "UploadFileEntityResponse",
      data: {
        __typename: "UploadFileEntity",
        id: "placeholder",
        attributes: {
          __typename: "UploadFile",
          url: placeholderSvg,
          width: 1000,
          height: 1000,
          provider: "local",
          size: 100,
          mime: "image/svg+xml",
          name: "placeholder.svg",
          hash: "",
        },
      },
    };
    return (
      <div className="bg-neutral-200 p-5 w-96">
        <PreviewCard article={article} />
      </div>
    );
  },
};
