import { useAppSelector } from "../app/hooks";
import Tabs from "./Tabs";

interface IProps {}

const FileTypeBar = ({}: IProps) => {
  const { openFiles} = useAppSelector((state) => state.fileTree);
  return (
      <div className={`flex w-full items-center border-b-[1px] border-[#ffffff1f]`}>
        <div className="flex justify-center">
          {openFiles.map((file) => (
            <Tabs file={file} key={file.id} />
          ))}
        </div>
      </div>
  );
};

export default FileTypeBar;
