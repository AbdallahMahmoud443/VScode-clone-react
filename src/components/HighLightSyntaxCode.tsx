import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  docco,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
}

const HighLightSyntaxCode = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor:"transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.3rem",
      }}
      showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default HighLightSyntaxCode;
