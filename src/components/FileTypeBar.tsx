import { useAppSelector } from "../app/hooks";
import HighLightSyntaxCode from "./HighLightSyntaxCode";
import Tabs from "./Tabs";

interface IProps {}

const FileTypeBar = ({}: IProps) => {
  const { openFiles, activeFile } = useAppSelector((state) => state.fileTree);


  return (
    <div>
      <div className={`flex w-full items-center border-b-[1px] border-[#ffffff1f]`}>
        <div className="flex justify-center">
          {openFiles.map((file) => (
            <Tabs file={file} key={file.id} />
          ))}
        </div>
      </div>
      <HighLightSyntaxCode content={activeFile.fileContent}/>
 
    </div>
  );
};

export default FileTypeBar;
