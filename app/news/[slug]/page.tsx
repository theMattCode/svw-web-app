import Article from "#/components/articles/Article";

export default function Page({ params }: any): JSX.Element {
  return (
    <div className="border-t-2 border-white">
      <Article slug={params.slug} />
    </div>
  );
}
