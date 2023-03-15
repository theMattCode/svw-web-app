import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content?: string | null;
};
export default function Teaser({ content }: Props): JSX.Element | null {
  if (content) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="font-bold text-sm p-1 m-0">{children}</p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }
  return null;
}
