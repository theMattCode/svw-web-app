type Props = {
  width?: string | null | undefined;
  height?: string | null | undefined;
};
export function Spacing({ width, height }: Props): JSX.Element {
  return (
    <>
      {width && <div className={width} />}
      {height && <div className={height} />}
    </>
  );
}
