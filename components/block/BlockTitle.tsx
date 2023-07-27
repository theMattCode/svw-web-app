type Props = { title: string };

export function BlockTitle({ title }: Props) {
  return (
    <div className="w-full flex py-2">
      <div className="container flex md:gap-1.5">
        <div className="bg-svw-blue-dark text-white text-3xl font-bold uppercase px-6 py-3">
          {title}
        </div>
        <div className="bg-svw-blue-dark w-full" />
      </div>
    </div>
  );
}
