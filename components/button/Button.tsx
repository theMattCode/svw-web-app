import { PropsWithChildren, type JSX } from "react";

type Props = {
  text?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
export default function Button({
  text,
  iconPosition = "left",
  disabled = false,
  type = "button",
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      className="hover:bg-svw-blue-darker bg-svw-blue-dark gray-400 text-white py-2 px-2 inline-flex items-center justify-center"
      disabled={disabled}
      type={type}
    >
      {iconPosition === "left" ? <div className="mr-2">{children}</div> : null}
      {text && <span>{text}</span>}
      {iconPosition === "right" ? <div className="ml-2">{children}</div> : null}
    </button>
  );
}
