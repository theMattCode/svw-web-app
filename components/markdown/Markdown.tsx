import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getFullAssetUrl } from "#/lib/asset";
import Link from "next/link";
import Image from "next/image";

type Props = {
  content?: string | null;
};
export default function Markdown({ content }: Props): JSX.Element | null {
  if (content) {
    return (
      <div className="container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ul: ({ children }) => (
              <div className="pl-6 font-light">
                <ul className="list-disc list-outside">{children}</ul>
              </div>
            ),
            ol: ({ children }) => (
              <div className="pl-6 font-light">
                <ol className="list-decimal list-outside">{children}</ol>
              </div>
            ),
            table: ({ children }) => (
              <table className="w-fit">{children}</table>
            ),
            th: ({ children, style }) => (
              <th
                className={`border-0 bg-svw-blue-default text-white px-3 py-2 ${
                  style?.textAlign === "left"
                    ? "text-left"
                    : style?.textAlign === "right"
                    ? "text-right"
                    : ""
                }`}
              >
                {children}
              </th>
            ),
            tr: ({ children }) => (
              <tr className="even:bg-gray-200">{children}</tr>
            ),
            td: ({ children }) => (
              <td className="border-0 border-b border-svw-blue-default px-3 py-2">
                {children}
              </td>
            ),
            img: (props) => (
              <Image
                className="w-full"
                alt={props.alt ?? ""}
                src={props.src ?? ""}
              />
            ),
            a: (props) => {
              if (props.href) {
                return (
                  <Link
                    href={props.href}
                    className="text-svw-blue-default font-medium"
                  >
                    {props.children}
                  </Link>
                );
              }
              return <>{props.children}</>;
            },
            p: ({ children }) => <p className="font-light pt-2">{children}</p>,
            blockquote: ({ children }) => (
              <blockquote className="flex flex-row divide-x">
                <div />
                <div className="pl-2 italic">{children}</div>
              </blockquote>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
  return null;
}
