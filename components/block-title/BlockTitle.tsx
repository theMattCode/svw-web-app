import { getId } from "#/lib/page";

interface Props {
  title: string;
}

export function BlockTitle({ title }: Props) {
  return (
    <div className="w-full flex items-end" id={getId(title)}>
      <div className="bg-svw-blue-default text-white text-xl font-bold uppercase px-4 py-2 whitespace-nowrap">
        {title}
      </div>
      <div className="bg-svw-blue-default w-full h-1" />
    </div>
  );
}
