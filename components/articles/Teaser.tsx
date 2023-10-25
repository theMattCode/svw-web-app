import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content?: string | null;
};
export default function Teaser({ content }: Props): JSX.Element | null {
  if (content) {
    return (
      <div className="py-2 flex flex-col gap-1 h-full">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <p className="font-medium text-sm m-0">{children}</p>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
  return null;
}
