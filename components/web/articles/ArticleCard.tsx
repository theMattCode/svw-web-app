import { Card, CardContent, CardFooter, CardTitle } from "#/components/web/card/Card";
import { Article } from "#/content/article";
import { CardImage } from "#/components/web/card/CardImage";
import Teaser from "#/components/web/articles/Teaser";
import { SoccerMatchPreview } from "#/components/match/SoccerMatchPreview";
import Link from "next/link";

export function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.date);
  return (
    <Link href={`/article/${article.slug}`} className="no-underline">
      <Card>
        {article.image && <CardImage image={article.image} />}
        <CardContent>
          <CardTitle>{article.title}</CardTitle>
          {article.teaser && <Teaser content={article.teaser} />}
          {article.match && article.match.type === "soccer" && <SoccerMatchPreview match={article.match} />}
          <CardFooter>
            <div className="w-fit truncate">{article.tags?.join(" · ")}</div>
            <div className="hidden @lg:block">{date.toLocaleDateString("de-DE", { dateStyle: "full" })}</div>
            <div className="block @lg:hidden">{date.toLocaleDateString("de-DE", { dateStyle: "short" })}</div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
}
