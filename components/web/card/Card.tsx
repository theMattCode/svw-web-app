import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface CardProps {
  iconType?: IconType;
  title?: string;
}

export function Card({ children }: PropsWithChildren<CardProps>) {
  return <div className="bg-white w-full h-full @container flex flex-col @5xl:flex-row">{children}</div>;
}

export function IconCard({ children }: PropsWithChildren<CardProps>) {
  return <div className="bg-white w-full h-full @container flex flex-row">{children}</div>;
}

export function CardIcon({ icon: Icon }: { icon: IconType }) {
  return <Icon className="min-w-8 min-h-8 my-4 ml-4 text-svw-blue-default" />;
}

export function CardTitle({ children }: { children: string }) {
  return <div className="py-2 text-xl font-medium text-svw-blue-default">{children}</div>;
}

export function CardContent({ children }: PropsWithChildren<{ icon?: IconType }>) {
  return <div className="w-full px-4 flex flex-col grow gap-2 @5xl:flex-auto min-w-48">{children}</div>;
}

export function CardFooter({ children }: PropsWithChildren<{}>) {
  return (
    <div className="mt-auto flex flex-row justify-between w-full border-t border-svw-blue-default/25 py-2 gap-4 text-sm text-svw-blue-default">
      {children}
    </div>
  );
}
