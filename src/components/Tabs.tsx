import { setActiveFile, setActiveFileId } from "../app/features/FileTreeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import IFile from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./svg/CloseIcon";

interface IProps {
  file: IFile;
}

const Tabs = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  const { activeFileId } = useAppSelector((state) => state.fileTree);
  const onTapClicked = () => {
    const { id, name, content } = file;
    dispatch(setActiveFile({ fileName: name, fileContent: content }));
    dispatch(setActiveFileId(id)); // **  Active File That Click On It
  };

  return (
    <div
      className={`flex items-center p-2 border-t-2 ${
        file.id === activeFileId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onTapClicked}
    >
      <span>
        <RenderFileIcon fileName={file.name} />
      </span>
      <span className="cursor-pointer w-fit mx-2 p-1">{file.name}</span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default Tabs;
