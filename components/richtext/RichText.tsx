import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getFullAssetUrl } from "#/lib/asset";

type Props = {
  content?: string | null;
};
export default function RichText({ content }: Props): JSX.Element | null {
  if (content) {
    return (
      <div className="p-2 bg-white">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ul: ({ node, ...props }) => (
              <div className="pl-5 font-light">
                <ul className="list-disc list-outside" {...props} />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th className="border border-gray-300 py-2 px-3" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="border border-gray-300 py-2 px-3" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img
                className="w-full"
                {...props}
                alt={props.alt ?? ""}
                src={getFullAssetUrl(props.src ?? "")}
              />
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
