import FileIcon from "./svg/FileIcon";
import RightArrawIcon from "./svg/RightArrawIcon";

interface IProps {
    fileName:string
}
const FileComponent = ({fileName}: IProps) => {
  return (
    <>
      <div className="flex items-center my-2">
        <span className="mr-2 flex items-center">
          <RightArrawIcon/>
          <FileIcon />
        </span>
        <span>{fileName}</span>
      </div>
    </>
  );
};

export default FileComponent;
