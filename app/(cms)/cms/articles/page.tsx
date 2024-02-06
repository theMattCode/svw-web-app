"use client";

import { PaginatedArticles } from "#/content/article";
import fetch from "node-fetch";
import { useEffect, useState } from "react";

export default function CMSArticles(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [articlesResponse, setArticlesResponse] = useState<PaginatedArticles>();
  useEffect(() => {
    fetch("/cms/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticlesResponse(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>loading</>;
  }

  if (!articlesResponse) {
    return <>no articles</>;
  }

  const articles = articlesResponse.articles;

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-between items-center">
        <span>Articles</span>
      </h1>
      <table>
        <thead>
          <tr>
            <td>Titel</td>
            <td>Datum</td>
            <td>Tags</td>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.slug}>
              <td>{article.title}</td>
              <td>{article.date}</td>
              <td>{article.tags?.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
