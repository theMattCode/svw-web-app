"use client";

import { TagsResponse } from "#/content/tags";
import fetch from "node-fetch";
import { JSX, useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardTitle } from "#/components/cms/card/Card";
import { createColumnHelper, getCoreRowModel, TableOptions } from "@tanstack/table-core";
import { Table } from "#/components/cms/table/Table";

interface Tag {
  name: string;
}

const COLUMN_HELPER = createColumnHelper<Tag>();

export default function CMSTags(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [tagResponse, setTagResponse] = useState<TagsResponse>();
  useEffect(() => {
    fetch("/cms/api/tags")
      .then((res) => res.json())
      .then((data) => {
        setTagResponse(data);
        setLoading(false);
      });
  }, []);

  const options = useMemo((): TableOptions<Tag> => {
    return {
      data: tagResponse?.tags.map((tag) => ({ name: tag })) ?? [],
      columns: [
        COLUMN_HELPER.accessor("name", {
          id: "name",
          header: "Name",
        }),
      ],
      getCoreRowModel: getCoreRowModel(),
    };
  }, [tagResponse?.tags]);

  return (
    <Card>
      <CardTitle>Tags</CardTitle>
      <Table options={options} />
    </Card>
  );
}
