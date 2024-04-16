import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren<{}>) {
  return <div className="card-base">{children}</div>;
}

export function CardContent({ children }: PropsWithChildren<{}>) {
  return <div className="card-content">{children}</div>;
}

export function CardTitle({ children }: PropsWithChildren<{}>) {
  return <div className="card-title">{children}</div>;
}
