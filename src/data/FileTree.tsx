import IFile from "../interfaces";
import { v4 as uuidv4 } from "uuid";
//? folder and file are same object =>{name,isFolder,children?,content?} (?) => means optional
export const fileTree: IFile = {
  id: uuidv4(),
  name: "VsCode Clone", // Folder 1
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules", // Folder 2
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".vite", // Folder 3
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "react.tsx", // Folder 3 File  1
              isFolder: false,
              content:`import { CodeBlock } from 'react-code-block';

function CodeBlockDemo() {
  return (
    <CodeBlock code="console.log('Hello World!')" language="js">
      <CodeBlock.Code className="bg-black">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}`
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "index.html", // Folder 1 File 1
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
          `,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "Button.tsx",
              isFolder: false,
              content: `import { CodeBlock } from 'react-code-block';

function CodeBlockDemo({ code, language }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}`,
            },
            {
              id: uuidv4(),
              name: "Index.txt",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
