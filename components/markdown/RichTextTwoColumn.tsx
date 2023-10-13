import Markdown from "#/components/markdown/Markdown";

type Props = {
  leftContent?: string | null;
  rightContent?: string | null;
  leftFraction?: number | null;
  rightFraction?: number | null;
};

const templateColumns = {
  "1,1": "lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]",
  "1,2": "lg:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]",
  "2,1": "lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)]",
  "1,3": "lg:grid-cols-[minmax(0,_1fr)_minmax(0,_3fr)]",
  "2,3": "lg:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]",
  "3,1": "lg:grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)]",
  "3,2": "lg:grid-cols-[minmax(0,_3fr)_minmax(0,_2fr)]",
  "1,4": "lg:grid-cols-[minmax(0,_1fr)_minmax(0,_4fr)]",
  "4,1": "lg:grid-cols-[minmax(0,_4fr)_minmax(0,_1fr)]",
  "2,4": "lg:grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)]",
  "4,2": "lg:grid-cols-[minmax(0,_4fr)_minmax(0,_2fr)]",
  "3,4": "lg:grid-cols-[minmax(0,_3fr)_minmax(0,_4fr)]",
  "4,3": "lg:grid-cols-[minmax(0,_4fr)_minmax(0,_3fr)]",
};

function getTemplateColumns({
  leftFraction = 1,
  rightFraction = 1,
}: Pick<Props, "leftFraction" | "rightFraction">): string {
  if (leftFraction === rightFraction) {
    return templateColumns["1,1"];
  }

  const key =
    `${leftFraction},${rightFraction}` as keyof typeof templateColumns;
  if (key in templateColumns) return templateColumns[key];

  return templateColumns["1,1"];
}

export default function RichTextTwoColumn({
  leftContent,
  rightContent,
  leftFraction,
  rightFraction,
}: Props): JSX.Element | null {
  const gridTemplateColumns = getTemplateColumns({
    leftFraction,
    rightFraction,
  });
  return (
    <div className={`container grid grid-cols-1 gap-4 ${gridTemplateColumns}`}>
      <div>
        <Markdown content={leftContent} />
      </div>
      <div>
        <Markdown content={rightContent} />
      </div>
    </div>
  );
}
