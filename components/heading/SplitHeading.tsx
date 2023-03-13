type SplitHeadingProps = {
  primaryText: string;
  secondaryText?: string;
};

export function SplitHeading({
  primaryText,
  secondaryText,
}: SplitHeadingProps): JSX.Element {
  return (
    <div className="flex flex-row gap-1 h-10 text-white">
      <div className="text-lg h-full bg-svw-blue-default px-4 flex flex-col justify-center whitespace-nowrap">
        {primaryText}
      </div>
      <div className="text-sm h-full bg-svw-blue-default px-4 flex flex-col justify-center whitespace-nowrap text-end w-full">
        {secondaryText}
      </div>
    </div>
  );
}
