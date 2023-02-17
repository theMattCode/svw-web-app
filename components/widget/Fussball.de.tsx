type Props = {
  widgetKey: string;
};

export default function FussballDeWidget({ widgetKey }: Props): JSX.Element {
  return (
    <div className="justify-self-end self-end items-end place-self-end">
      <iframe
        width={450}
        height={450}
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
