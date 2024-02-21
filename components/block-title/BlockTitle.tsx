import { getId } from "#/lib/page";

type Props = { title: string };

export function BlockTitle({ title }: Props) {
  return (
    <div className="w-full flex px-2 md:px-0" id={getId(title)}>
      <div className="container flex md:gap-2">
        <div className="bg-svw-blue-default text-white text-xl font-bold uppercase px-4 py-2 whitespace-nowrap rounded-l-md">
          {title}
        </div>
        <div className="bg-svw-blue-default w-full rounded-r-md" />
      </div>
    </div>
  );
}
