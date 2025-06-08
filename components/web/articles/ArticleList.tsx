import { Article } from "#/content/article";
import { ArticleCard } from "#/components/web/articles/ArticleCard";
import { List } from "#/components/web/list/List";

type Props = {
  articles: Article[];
};

export function ArticleList({ articles }: Props) {
  if (articles.length === 0) {
    return null;
  }
  return (
    <List>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </List>
  );
}
