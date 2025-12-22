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
    options: DEFAULT_VIEWPORTS
  },
  chromatic: { viewports: [320, 640, 768, 1024, 1200] },
};

export const initialGlobals = {
  viewport: {
    value: "medium",
    isRotated: false
  }
};
