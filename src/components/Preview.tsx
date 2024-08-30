import { useAppSelector } from "../app/hooks";
import FileTypeBar from "./FileTypeBar";
import HighLightSyntaxCode from "./HighLightSyntaxCode";
import ImageIcon from "./ImageIcon";

interface IProps {}

const Preview = ({}: IProps) => {
  const { activeFile, openFiles } = useAppSelector((state) => state.fileTree);
  return (
    <>
      <div>
        <FileTypeBar />
        {openFiles.length !== 0 ? (
          <HighLightSyntaxCode content={activeFile.fileContent} />
        ) : (
          <div className="flex justify-center items-center h-screen">
            <ImageIcon className="w-80 h-80" src={"/icons/vscode.svg"} />
          </div>
        )}
      </div>
    </>
  );
};

export default Preview;
