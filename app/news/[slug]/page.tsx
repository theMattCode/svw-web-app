import Article from "#/components/articles/Article";

export default function Page({ params }: any): JSX.Element {
  return <Article slug={params.slug} />;
}
