
import IFile from "../interfaces";
import FileIcon from "./svg/FileIcon";
import RightArrawIcon from "./svg/RightArrawIcon";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  return (
    <div className='ml-3'>
      <div className="flex items-center my-2">
        <span className="mr-2 flex items-center">
          <RightArrawIcon />
          <FileIcon />
        </span>
        <span>{fileTree.name}</span>
      </div>
      {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
