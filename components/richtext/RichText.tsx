import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getFullAssetUrl } from "#/lib/asset";

type Props = {
  content?: string | null;
};
export default function RichText({ content }: Props): JSX.Element | null {
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
              <img
                className="w-full"
                alt={props.alt ?? ""}
                src={getFullAssetUrl(props.src ?? "")}
              />
            ),
            a: (props) => (
              <a
                href={getFullAssetUrl(props.href ?? "")}
                className="text-svw-blue-default font-medium"
              >
                {props.children}
              </a>
            ),
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
