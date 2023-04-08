import RichText from "#/components/richtext/RichText";

type Props = {
  leftContent?: string | null;
  rightContent?: string | null;
};
export default function RichTextTwoColumn({
  leftContent,
  rightContent,
}: Props): JSX.Element | null {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <RichText content={leftContent} />
      </div>
      <div>
        <RichText content={rightContent} />
      </div>
    </div>
  );
}
