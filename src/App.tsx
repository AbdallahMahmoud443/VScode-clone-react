import FileComponent from "./components/FileComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <>
      <div className="m-7">
        {fileTree.children?.map((file, idx) => (
          <FileComponent fileName={file.name} key={idx} />
        ))}
      </div>
    </>
  );
}

export default App;
