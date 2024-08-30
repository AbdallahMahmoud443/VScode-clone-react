import { useRef, useEffect } from "react";
import { setActiveFile, setOpenedFile } from "../../app/features/FileTreeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
interface IProps {
  showMenu: (arg: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y }, showMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  //** use useEffect hook to control of Menu context Component
  useEffect(() => {
    //** Handlers
    const HandleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
        showMenu(false); //! To Ensure Menu Open
      }
    };
    window.addEventListener("click", HandleClickOutside);
    return () => window.removeEventListener("click", HandleClickOutside); //! Important ummount
  }, [showMenu]);

  const dispatch = useAppDispatch();
  //** Handlers
  //**  Close All tabs
  const onCloseAll = () => {
    dispatch(setOpenedFile([]));
    if (menuRef.current) {
      showMenu(false); //! To Ensure Menu Open
    }
  };
  //**  Close single tab
  const { tabIdToRemove, openFiles } = useAppSelector(
    (state) => state.fileTree
  );
  const onCloseTab = () => {
    //* 1- Filter All Tabs except User Clicked
    const filteredTaps = openFiles.filter((file) => file.id != tabIdToRemove);
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
      showMenu(false); //! To Close Menu
      return;
    }
    showMenu(false); //! To Close Menu
  };

  return (
    <div
      className="bg-white text-black w-fit rounded-md py-1"
      style={{ position: "absolute", left: x, top: y }} // Show Menu Close to mouse
      ref={menuRef}
    >
      <ul>
        <li
          className="hover:bg-slate-300 px-8 py-1 m-1 cursor-pointer rounded-md"
          onClick={onCloseTab}
        >
          Close
        </li>
        <li
          className="hover:bg-slate-300 px-8 py-1 m-1 cursor-pointer rounded-sm"
          onClick={onCloseAll}
        >
          Close all
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;

/**
 * 1- Ref of context Menu
 * 2- Choose Right Event => (Click)
 * 3 - UseEffect() => to render component and manage CLC
 */
