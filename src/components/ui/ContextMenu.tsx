import { useRef, useEffect } from "react";
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

  return (
    <div
      className="bg-white text-black w-fit rounded-md py-1 px-8"
      style={{ position: "absolute", left: x, top: y }} // Show Menu Close to mouse
      ref={menuRef}
    >
      <ul>
        <li>Close</li>
        <li>Close all</li>
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
