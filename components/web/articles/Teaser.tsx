import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { JSX } from "react";

type Props = {
  content?: string | null;
};
export default function Teaser({ content }: Props): JSX.Element | null {
  return (
    <div className="flex flex-col">
      {content && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <div className="font-normal">{children}</div>,
          }}
        >
          {content}
        </ReactMarkdown>
      )}
    </div>
  );
}
