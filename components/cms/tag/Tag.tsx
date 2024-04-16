type Props = {
  title: string;
};
export function Tag({ title }: Props) {
  return <span className="bg-svw-blue-default text-white rounded-3xl py-1 px-3">{title}</span>;
}
