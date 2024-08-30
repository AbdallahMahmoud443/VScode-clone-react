import { useState } from "react";
import IFile from "../interfaces";
import RightArrawIcon from "./svg/RightArrawIcon";
import ButtomArrowIcon from "./svg/ButtomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setActiveFile, setOpenedFile } from "../app/features/FileTreeSlice";
import { isFileObjectExist } from "../utils/Functions";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children,content } = fileTree;

  const [isOpen, setIsOpen] = useState<boolean>(true);
  //* Use File Tree reducer
  const dispatch = useAppDispatch();
  const openedFiles = useAppSelector((state) => state.fileTree.openFiles);

  //* Handlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  //* Responsible For Opening Files
  const onFileClicked = () => {
    const exits = isFileObjectExist(openedFiles, id); // **  Check if File is Open Or Not
    dispatch(setActiveFile({ fileName: name, fileContent: content ,activeFileId:id}));
    if (exits) return; // This means if file is open ,user can't open it again
    dispatch(setOpenedFile([...openedFiles, fileTree]));

  };

  return (
    <div className="ml-3">
      <div className="flex my-2 space-x-1">
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
          <div className="flex items-center" onClick={onFileClicked}>
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
