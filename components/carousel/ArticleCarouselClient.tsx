"use client";

import { Fragment, useEffect, useState, type JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "#/content/article";

type Props = {
  articles: Article[];
};

export function ArticleCarouselClient({ articles }: Props): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const length = articles.length;
    const timeout = setTimeout(() => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1), 7000);
    return () => clearTimeout(timeout);
  }, [currentSlide, articles.length, setCurrentSlide]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full place-items-end">
        {articles.map((article, index) => {
          if (index === currentSlide && article.image) {
            return (
              <Fragment key={article.slug}>
                <Image
                  src={article.image.src}
                  alt=""
                  width={article.image.width ?? 0}
                  height={article.image.height ?? 0}
                  className="object-cover absolute left-0 right-0 w-full h-[65vh]"
                />
                <div className="container flex flex-row items-end h-full w-full z-0">
                  <Link href={`/news/${article.slug}`} className="">
                    <h3 className="px-3 lg:ml-32 w-10/12">
                      <span className="py-0.5 bg-white/75 text-2xl news-title-shadow">{article.title}</span>
                    </h3>
                  </Link>
                </div>
              </Fragment>
            );
          }
        })}
        <div className="container flex flex-row justify-center items-end p-2 z-0 ">
          {articles.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === currentSlide
                    ? "h-2 w-4 bg-svw-blue-default m-2 cursor-pointer"
                    : "h-2 w-4 bg-white m-2 cursor-pointer"
                }
                onClick={() => {
                  setCurrentSlide(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
