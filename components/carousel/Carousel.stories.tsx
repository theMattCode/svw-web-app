import { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "#/components/carousel/Carousel";
import { CarouselClient } from "#/components/carousel/CarouselClient";
import { Article } from "#/lib/graphql/generated";
import placeholderSvg from "#/public/placeholder.svg";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
};

export default meta;

type Story = StoryObj<typeof Carousel>;

function createArticle(index: number): Article {
  return {
    __typename: "Article",
    title: `Article ${index} Title`,
    image: {
      __typename: "UploadFileEntityResponse",
      data: {
        __typename: "UploadFileEntity",
        id: `placeholder-${index}`,
        attributes: {
          __typename: "UploadFile",
          url: placeholderSvg.src,
          width: 1000,
          height: 1000,
          provider: "local",
          size: 100,
          mime: "image/svg+xml",
          name: "placeholder.svg",
          hash: "",
        },
      },
    },
    date: "2023-01-11T00:00:00.000Z",
    slug: `article-${index}-title`,
    createdAt: "2023-01-12T12:34:00.000Z",
    publishedAt: "2023-01-12T12:34:56.000Z",
    updatedAt: "2023-01-13T01:23:00.000Z",
    promote: false,
    teaser: "Article Teaser",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  };
}

export const ThreeItemsCarousel: Story = {
  render: () => (
    <div className="bg-neutral-200 flex flex-col place-items-center pt-4">
      <CarouselClient
        articles={[createArticle(1), createArticle(2), createArticle(3)]}
      />
    </div>
  ),
};
