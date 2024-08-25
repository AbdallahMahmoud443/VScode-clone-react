import { useState } from "react";
import IFile from "../interfaces";
import RightArrawIcon from "./svg/RightArrawIcon";
import ButtomArrowIcon from "./svg/ButtomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  //* Handerl

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="ml-1">
      <div className="flex items-center my-2 space-x-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center space-x-1">
            {isOpen ? <ButtomArrowIcon /> : <RightArrawIcon />}
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="mr-2">
              <RenderFileIcon fileName={name} />
            </span>
            {name}
          </div>
        )}
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
