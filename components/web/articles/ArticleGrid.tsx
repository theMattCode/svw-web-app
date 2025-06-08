import { Article } from "#/content/article";
import { ArticleCard } from "#/components/web/articles/ArticleCard";
import { Grid } from "#/components/web/grid/Grid";

type Props = {
  articles: Article[];
};

export function ArticleGrid({ articles }: Props) {
  if (articles.length === 0) {
    return null;
  }
  return (
    <Grid>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </Grid>
  );
}
