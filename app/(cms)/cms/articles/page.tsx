"use client";

import { Article, PaginatedArticles } from "#/content/article";
import fetch from "node-fetch";
import { useEffect, useMemo, useState } from "react";
import { Card, CardTitle } from "#/components/cms/card/Card";
import { Table } from "#/components/cms/table/Table";
import { createColumnHelper, getCoreRowModel, TableOptions } from "@tanstack/table-core";

const COLUMN_HELPER = createColumnHelper<Article>();

export default function CMSArticles() {
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

  const articles = articlesResponse?.articles;

  const options = useMemo((): TableOptions<Article> => {
    return {
      data: articles ?? [],
      getRowId: (article) => article.slug,
      columns: [
        COLUMN_HELPER.accessor("title", {
          header: "Titel",
          id: "title",
        }),
        COLUMN_HELPER.accessor("date", {
          header: "Datum",
          id: "date",
        }),
        COLUMN_HELPER.accessor("tags", {
          header: "Tags",
          id: "tags",
        }),
      ],
      getCoreRowModel: getCoreRowModel(),
    };
  }, [articles]);

  return (
    <Card>
      <CardTitle>Artikel</CardTitle>
      <Table options={options} />
    </Card>
  );
}
