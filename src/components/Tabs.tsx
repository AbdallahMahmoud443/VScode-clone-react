import { setActiveFile, setOpenedFile, setTabIdToRemove } from "../app/features/FileTreeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import IFile from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./svg/CloseIcon";

interface IProps {
  file: IFile;
}

const Tabs = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  const { activeFileId } = useAppSelector((state) => state.fileTree.activeFile);
  const { openFiles } = useAppSelector((state) => state.fileTree);
  //**  Trigger When Clicked On Tap
  const onTapClicked = () => {
    const { id, name, content } = file;
    dispatch(
      setActiveFile({ fileName: name, fileContent: content, activeFileId: id })
    );
  };
  //** Trigger When Close Tap
  const onRemove = (id: string) => {
    //* 1- Filter All Tabs except User Clicked
    const filteredTaps = openFiles.filter((file) => file.id != id);
    //* 2- Updated Tabs
    dispatch(setOpenedFile(filteredTaps));
    //* 3- Get last Tab
    const lastTap = filteredTaps[filteredTaps.length - 1];
    //* 4- If Found One Tab only close it and rest ActiveFile and OpenFiles
    if (!lastTap) {
      dispatch(setOpenedFile([]));
      dispatch(
        setActiveFile({ fileName: "", fileContent: "", activeFileId: null })
      );
      return;
    }
    //* 5- Put last Tab is active
    dispatch(
      setActiveFile({
        fileName: lastTap.name,
        fileContent: lastTap.content,
        activeFileId: lastTap.id,
      })
    );
  };
  return (
    <div
      className={`flex items-center p-2 border-t-2 ${
        file.id === activeFileId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onTapClicked}
      onContextMenu={e =>{
        e.preventDefault()
        dispatch(setTabIdToRemove(file.id)) // Get ID of Tab
      }}
    >
      <span>
        <RenderFileIcon fileName={file.name} />
      </span>
      <span className="cursor-pointer w-fit mx-2 p-1">{file.name}</span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default Tabs;
