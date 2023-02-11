"use client";

import { PromotionArticle } from "#/lib/graphql/articles.gql";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  articles: PromotionArticle[];
};

export function CarouselClient({ articles }: Props): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const length = articles.length;
    setTimeout(
      () => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1),
      7000
    );
  }, [currentSlide, articles.length, setCurrentSlide]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full place-items-end">
        {articles.map((article, index) => {
          if (index === currentSlide && article.image?.data?.attributes) {
            const imageAttributes = article.image.data.attributes;
            return (
              <Fragment key={article.slug}>
                <Image
                  src={imageAttributes.url}
                  alt=""
                  width={imageAttributes.width ?? 0}
                  height={imageAttributes.height ?? 0}
                  className="object-cover absolute left-0 right-0 w-full h-96 md:h-[50vh]"
                />
                <div className="container flex flex-row items-end h-full z-0">
                  <Link href={`/news/${article.slug}`}>
                    <h3 className="px-3 lg:ml-32 w-10/12 lg:w-7/12">
                      <span className="py-0.5 bg-white/75 news-title-shadow">
                        {article.title}
                      </span>
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
