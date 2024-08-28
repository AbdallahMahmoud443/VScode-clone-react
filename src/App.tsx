import FileTypeBar from "./components/FileTypeBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-60 border-r-2 border-[#ffffff1f] h-screen flex items-start">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <div>
          <FileTypeBar />
        </div>
      </div>
    </> 
  );
}

export default App;
