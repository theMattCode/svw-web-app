import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { JSX } from "react";

type Props = {
  content?: string | null;
};
export default function Teaser({ content }: Props): JSX.Element | null {
  return (
    <div className="p-1 flex flex-col gap-1 h-full">
      {content && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <p className="font-medium text-sm m-0">{children}</p>,
          }}
        >
          {content}
        </ReactMarkdown>
      )}
    </div>
  );
}
