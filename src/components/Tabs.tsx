import { setActiveFile } from "../app/features/FileTreeSlice";
import { useAppDispatch } from "../app/hooks";
import IFile from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./svg/CloseIcon";

interface IProps {
  file: IFile;
}

const Tabs = ({ file }: IProps) => {
  const dispatch = useAppDispatch();

  const onTapClicked = ()=>{
    const {name,content} = file
    dispatch(setActiveFile({fileName:name,fileContent:content}))
  }
  
  return (
    <div className="flex items-center p-2" onClick={onTapClicked}>
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
