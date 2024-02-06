"use client";

import { Tag } from "#/components/articles/ArticleListItem";
import { TagsResponse } from "#/content/tags";
import fetch from "node-fetch";
import { JSX, useEffect, useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

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
  if (loading) {
    return <>loading</>;
  }
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-between items-center">
        <span>Tags</span>
        <MdOutlineAddCircle className="text-gray-300" />
      </h1>
      <div className="flex flex-col gap-1">{tagResponse?.tags.map((tag) => <Tag key={tag} tag={tag} />)}</div>
    </div>
  );
}
