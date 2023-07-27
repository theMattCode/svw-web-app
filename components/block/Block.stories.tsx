import { Meta, StoryObj } from "@storybook/react";
import { Block as BlockModel } from "#/lib/graphql/generated";
import { Blocks } from "#/components/block/Blocks";
import { Block } from "#/components/block/Block";

const meta: Meta<typeof Block> = {
  title: "Components/Blocks",
};

export default meta;

type Story = StoryObj<typeof Block>;

function createBlock(block: Partial<BlockModel> = {}): BlockModel {
  return {
    __typename: "Block",
    title: block?.title ?? "Title",
    name: block?.name ?? "Name",
    bgColor: block?.bgColor ?? "#a2a2a2",
    contents: block?.contents ?? [],
    publishedAt: block?.publishedAt ?? "2023-01-11T00:00:00.000Z",
    createdAt: block?.createdAt ?? "2023-01-11T00:00:00.000Z",
    updatedAt: block?.updatedAt ?? "2023-01-11T00:00:00.000Z",
  };
}

export const SimpleBlock: Story = {
  render: () => <Block block={createBlock()} />,
};
