type Props = {
  widgetKey: string;
};

export function FussballDeWidget({ widgetKey }: Props): JSX.Element {
  return (
    <div className="container flex justify-center">
      <iframe
        className="w-full max-w-[900px]"
        height={500}
        src={
          "//www.fussball.de/widget2/-/schluessel/" +
          widgetKey +
          "/target/" +
          widgetKey +
          "/caller/www.svwalddorf.de"
        }
      />
    </div>
  );
}
