import { Meta, StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "#/components/header/Header";
import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";
import { createPageEntity } from "#/lib/graphql/mock/page";
import { PageRelationResponseCollection } from "#/lib/graphql/generated";
import { DEFAULT_VIEWPORTS } from "#/lib/stories";

const meta: Meta<typeof HeaderComponent> = {
  title: "Components/Header",
  component: HeaderComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const navigationLinks: PageRelationResponseCollection = {
  __typename: "PageRelationResponseCollection",
  data: [
    createPageEntity({ id: "1" }, [
      createPageEntity({ id: "1.1" }, [
        createPageEntity({ id: "1.1.1" }),
        createPageEntity({ id: "1.1.2" }),
      ]),
      createPageEntity({ id: "1.2" }),
    ]),
    createPageEntity({ id: "2" }, [
      createPageEntity({ id: "2.1" }, [
        createPageEntity({ id: "2.1.1" }),
        createPageEntity({ id: "2.1.2" }),
      ]),
      createPageEntity({ id: "2.2" }, [
        createPageEntity({ id: "2.2.1" }),
        createPageEntity({ id: "2.2.2" }),
        createPageEntity({ id: "2.2.3" }),
      ]),
    ]),
    createPageEntity({ id: "3" }, [
      createPageEntity({ id: "3.1" }, [
        createPageEntity({ id: "3.1.1" }),
        createPageEntity({ id: "3.1.2" }),
      ]),
      createPageEntity({ id: "3.2" }, [
        createPageEntity({ id: "3.2.1" }),
        createPageEntity({ id: "3.2.2" }),
        createPageEntity({ id: "3.2.3" }),
      ]),
    ]),
  ],
};

type Story = StoryObj<typeof HeaderComponent>;

export const Expanded: Story = {
  args: {
    headerData: {
      __typename: "Header",
      navigationLinks,
      logo: createUploadFileEntityResponse(),
      showSearch: false,
    },
  },
  parameters: {
    viewport: {
      viewports: {
        320: DEFAULT_VIEWPORTS["320"],
        640: DEFAULT_VIEWPORTS["640"],
      },
      defaultViewport: 640,
    },
    chromatic: { viewports: [320, 640] },
  },
  play: async ({ canvasElement }) => {},
};

export const Collapsed: Story = {
  args: {
    headerData: {
      __typename: "Header",
      navigationLinks,
      logo: createUploadFileEntityResponse(),
      showSearch: false,
    },
  },
};
