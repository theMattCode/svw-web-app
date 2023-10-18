export type Event = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  place?: string;
};
export const events: Event[] = [
  {
    title: "9m Turnier",
    start: new Date(2024, 0, 13),
    end: new Date(2024, 0, 13),
    allDay: true,
    place: "Gemeindehalle",
  },
  {
    title: "2. SV Walddorf Winter-Cup (Jugendfußball Hallenturniere) Tag 1",
    start: new Date(2024, 0, 27),
    end: new Date(2024, 0, 27),
    allDay: true,
    place: "Ballsporthalle",
  },
  {
    title: "2. SV Walddorf Winter-Cup (Jugendfußball Hallenturniere) Tag 2",
    start: new Date(2024, 0, 28),
    end: new Date(2024, 0, 28),
    allDay: true,
    place: "Ballsporthalle",
  },
  {
    title: "2. SV Walddorf Winter-Cup (Jugendfußball Hallenturniere) Tag 3",
    start: new Date(2024, 1, 3),
    end: new Date(2024, 1, 3),
    allDay: true,
    place: "Ballsporthalle",
  },
  {
    title: "2. SV Walddorf Winter-Cup (Jugendfußball Hallenturniere) Tag 4",
    start: new Date(2024, 1, 4),
    end: new Date(2024, 1, 4),
    allDay: true,
    place: "Ballsporthalle",
  },
  {
    title: "Mitgliederversammlung",
    start: new Date(2024, 2, 15, 19, 30),
    end: new Date(2024, 2, 15, 22, 0),
    allDay: false,
    place: "Gemeindehalle",
  },
  {
    title: "3. FTB-Cup (Jugendfußballturniere) Tag 1",
    start: new Date(2024, 5, 29),
    end: new Date(2024, 5, 29),
    allDay: true,
    place: "Sportplätze",
  },
  {
    title: "3. FTB-Cup (Jugendfußballturniere) Tag 2",
    start: new Date(2024, 5, 30),
    end: new Date(2024, 5, 30),
    allDay: true,
    place: "Sportplätze",
  },
];
