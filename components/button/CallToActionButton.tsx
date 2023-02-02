import { PropsWithChildren } from "react";

type Props = {
  text?: string;
  iconPosition?: "left" | "right";
};
export default function CallToActionButton({
  text,
  iconPosition = "left",
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button className="bg-svw-blue-default hover:bg-svw-blue-darker gray-400 text-white py-1 px-2 inline-flex items-center">
      {iconPosition === "left" ? <div className="mr-2">{children}</div> : null}
      {text && <span>{text}</span>}
      {iconPosition === "right" ? <div className="ml-2">{children}</div> : null}
    </button>
  );
}
