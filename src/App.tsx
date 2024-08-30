import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <ResizablePanel
          Sidebar={
            <div className="flex flex-start">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          Main={<Preview />}
          showSideBar
        />
      </div>
    </>
  );
}

export default App;
