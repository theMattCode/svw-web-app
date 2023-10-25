type Props = {
  widgetKey: string;
  height?: number;
};

export function FussballDeWidget({ widgetKey, height }: Props): JSX.Element {
  return (
    <div className="container flex justify-center">
      <iframe
        className="w-full max-w-[900px]"
        height={height ?? 500}
        src={
          "//www.fussball.de/widget2/-/schluessel/" + widgetKey + "/target/" + widgetKey + "/caller/www.svwalddorf.de"
        }
      />
    </div>
  );
}
