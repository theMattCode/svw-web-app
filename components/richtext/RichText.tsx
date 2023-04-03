import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getFullAssetUrl } from "#/lib/asset";

type Props = {
  content?: string | null;
};
export default function RichText({ content }: Props): JSX.Element | null {
  if (content) {
    return (
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
          th: ({ children }) => (
            <th className="border border-gray-300 px-3">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-3">{children}</td>
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
          p: ({ children }) => <p className="font-light">{children}</p>,
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
    );
  }
  return null;
}
