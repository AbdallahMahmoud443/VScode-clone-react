interface IProps {
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y } }: IProps) => {
  return (
    <>
      <div
        className="bg-white text-black w-fit rounded-md py-1 px-8"
        style={{ position: "absolute", left: x, top: y }} // Show Menu Close to mouse
      >
        <ul>
          <li>Close</li>
          <li>Close all</li>
        </ul>
      </div>
    </>
  );
};

export default ContextMenu;
