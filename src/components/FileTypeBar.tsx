import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import Tabs from "./Tabs";
import ContextMenu from "./ui/ContextMenu";

interface IProps {}

const FileTypeBar = ({}: IProps) => {
  const { openFiles } = useAppSelector((state) => state.fileTree);
  // Cooridinate on mouse in screen
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`flex  w-fit items-center border-b-[1px] border-[#ffffff1f]`}
        onContextMenu={(e) => {
          e.preventDefault();
          console.log(`PositionX:${e.clientX},PositionY:${e.clientY}`);
          setPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        <div className="flex justify-center">
          {openFiles.map((file) => (
            <Tabs file={file} key={file.id} />
          ))}
         
        </div>
        {showMenu && <ContextMenu position={position} />}
      </div>
    </div>
  );
};

export default FileTypeBar;
