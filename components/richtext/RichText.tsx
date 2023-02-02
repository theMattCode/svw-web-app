import ReactMarkdown from "react-markdown";

type Props = {
  content?: string | null;
};
export default function RichText({ content }: Props): JSX.Element | null {
  if (content) {
    return (
      <div className="mt-10 p-8 shadow-lg bg-white">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }
  return null;
}
