type Props = { title: string };

export function BlockTitle({ title }: Props) {
  return (
    <div className="container flex justify-center md:justify-start">
      <div className="text-white bg-svw-blue-dark w-fit ribbon-heading px-4 pt-4 pb-2 mb-12">
        <div className="text-3xl font-bold uppercase">{title}</div>
      </div>
    </div>
  );
}
