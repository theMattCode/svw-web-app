"use client";

import { PromotionArticle } from "#/lib/graphql/articles.gql";
import { useState } from "react";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";

type Props = {
  articles: PromotionArticle[];
};

export function CarouselClient({ articles }: Props): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="mx-8 md:w-10/12 lg:w-8/12">
      <div className="overflow-hidden border-2 border-white">
        {articles.map((article, index) => {
          if (index === currentSlide && article.image?.data?.attributes) {
            const imageAttributes = article.image.data.attributes;
            return (
              <Image
                src={getFullAssetUrl(imageAttributes.url)}
                alt=""
                width={imageAttributes.width ?? 0}
                height={imageAttributes.height ?? 0}
                className="animate-fadeIn"
                key={article.slug}
              />
            );
          }
        })}
      </div>
      <div className="flex flex-row justify-center p-2">
        {articles.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-3 w-3 bg-svw-blue-default rounded-full border-2 border-svw-blue-default mx-2 mb-2 cursor-pointer"
                  : "h-3 w-3 bg-neutral-300 rounded-full border-2 border-svw-blue-default mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
