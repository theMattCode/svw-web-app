type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps): JSX.Element {
  return (
    <div className="flex flex-row gap-1 h-10 text-lg h-full bg-svw-blue-default text-white px-4 flex flex-col justify-center whitespace-nowrap">
      {text}
    </div>
  );
}
