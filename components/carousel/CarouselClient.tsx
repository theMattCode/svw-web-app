"use client";

import { PromotionArticle } from "#/lib/graphql/articles.gql";
import { useEffect, useState } from "react";
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
      5000
    );
  }, [currentSlide, articles.length, setCurrentSlide]);

  /*
  const handleNextSlide = () => {
    let newSlide = currentSlide === articles.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? articles.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  */
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full place-items-end">
        {articles.map((article, index) => {
          if (index === currentSlide && article.image?.data?.attributes) {
            const imageAttributes = article.image.data.attributes;
            return (
              <>
                <Image
                  key={article.slug}
                  src={imageAttributes.url}
                  alt=""
                  width={imageAttributes.width ?? 0}
                  height={imageAttributes.height ?? 0}
                  className="object-cover absolute left-0 right-0 w-full h-96 md:h-[50vh]"
                />
                <div className="container flex flex-row items-end h-full z-50">
                  <h3 className="px-3 flex flex-row lg:ml-32">
                    <Link
                      href={`/news/${article.slug}`}
                      className="py-0.5 bg-white/75 news-title-shadow"
                    >
                      {article.title}
                    </Link>
                  </h3>
                </div>
              </>
            );
          }
        })}
        <div className="container flex flex-row justify-center items-end p-2 z-50 ">
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
