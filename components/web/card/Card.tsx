import { PropsWithChildren } from "react";
import { ImageProps } from "#/lib/image";
import { BsPersonBoundingBox as Placeholder } from "react-icons/bs";
import Image from "next/image";

interface CardProps {
  image?: ImageProps;
  title?: string;
}

export function Card({ image, title, children }: PropsWithChildren<CardProps>) {
  return (
    <div className="rounded-lg bg-white shadow-lg flex flex-col @container">
      <CardImage url={image?.src} />
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </div>
  );
}

export function CardImage({ url }: { url?: string }) {
  return url ? <Image src={url} alt="" /> : <Placeholder />;
}

export function CardTitle({ children }: { children: string }) {
  return <h3 className="text-lg font-medium text-svw-blue-default mb-2 truncate">{children}</h3>;
}
