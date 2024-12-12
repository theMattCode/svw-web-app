import "../app/(web)/web.css";
import { DEFAULT_VIEWPORTS } from "#/lib/stories";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: DEFAULT_VIEWPORTS,
    defaultViewport: "medium",
  },
  chromatic: { viewports: [320, 640, 768, 1024, 1200] },
};
