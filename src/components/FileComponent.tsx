import FileIcon from "./svg/FileIcon";

interface IProps {
    fileName:string
}
const FileComponent = ({fileName}: IProps) => {
  return (
    <>
      <div className="flex items-center my-2">
        <span className="mr-2">
          <FileIcon />
        </span>
        <span>{fileName}</span>
      </div>
    </>
  );
};

export default FileComponent;
