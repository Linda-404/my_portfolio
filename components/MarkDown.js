import ReactMarkdown from "react-markdown";
// import RemarkGemoji from "react-gemoji";
import RemarkGfm from "remark-gfm";

export default function MarkDown({ text }) {
  return <ReactMarkdown remarkPlugins={[RemarkGfm]}>{text}</ReactMarkdown>;
}
