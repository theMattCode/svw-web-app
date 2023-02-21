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
            <div className="pl-5 font-light">
              <ul className="list-disc list-outside">{children}</ul>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 py-2 px-3">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 py-2 px-3">{children}</td>
          ),
          img: (props) => (
            <img
              className="w-full"
              alt={props.alt ?? ""}
              src={getFullAssetUrl(props.src ?? "")}
            />
          ),
          p: ({ children }) => <p className="font-light py-2">{children}</p>,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }
  return null;
}
