type Props = { title: string; bgColor?: string };

export function BlockTitle({ title, bgColor = "bg-svw-blue-darker" }: Props) {
  return (
    <div className="w-full flex py-2">
      <div className="container flex bg-svw-blue-dark">
        <div className="text-white text-3xl font-bold uppercase px-6 py-3">
          {title}
        </div>
        <div className="w-1.5 h-full" style={{ backgroundColor: bgColor }} />
      </div>
    </div>
  );
}
