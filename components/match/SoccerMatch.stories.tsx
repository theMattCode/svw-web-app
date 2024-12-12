import { Meta, StoryObj } from "@storybook/react";
import { SoccerMatchReport } from "#/components/match/SoccerMatchReport";

const meta: Meta<typeof SoccerMatchReport> = {
  component: SoccerMatchReport,
  title: "Components/Match/SoccerMatch",
  args: {
    match: {
      type: "soccer",
      opponents: {
        home: { name: "SV Walddorf 1904 e.V.", logo: "/media/svw-emblem.svg" },
        away: {
          name: "FC Another Team Which May Wrap",
          logo: "/media/logo/sv-walddorf-2023.png",
        },
      },
      competition: {
        name: "Competition",
        link: {
          title: "Fussball.de",
          url: "https://fussball.de",
          extern: true,
        },
        season: "1. Bundesliga",
        round: "1. Spieltag",
      },
      result: {
        home: { final: 2, halftime: 1 },
        away: { final: 1, halftime: 0 },
      },
      events: [
        {
          type: "goal",
          subtype: "regular",
          team: "home",
          time: 40,
          scorer: "Julian Lichtenberger",
        },
        {
          type: "goal",
          subtype: "regular",
          team: "home",
          time: 60,
          scorer: "Paul Hellwig",
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SoccerMatchReport>;

export const Default: Story = {};
