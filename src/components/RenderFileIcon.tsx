import ImageIcon from "./ImageIcon";
import FileIcon from "./svg/FileIcon";
interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  if (!isFolder) {
    const extension = fileName.split(".").pop();
    if (extension === "tsx") return <ImageIcon src="/icons/react_ts.svg" />;
    if (extension === "jsx") return <ImageIcon src="/icons/react.svg" />;
    if (extension === "html") return <ImageIcon src="/icons/html.svg" />;
    return <FileIcon />;
  } else {
    if (fileName === "node_modules" && isOpen) {
      return <ImageIcon src="/icons/folder-node-open.svg" />;
    } else if (fileName === "node_modules" && !isOpen) {
      return <ImageIcon src="/icons/folder-node.svg" />;
    } else if (fileName === "public" && isOpen) {
      return <ImageIcon src="/icons/folder-public-open.svg" />;
    } else if (fileName === "public" && !isOpen) {
      return <ImageIcon src="/icons/folder-public.svg" />;
    } else if (fileName === "src" && isOpen) {
      return <ImageIcon src="/icons/folder-src-open.svg" />;
    } else if (fileName === "src" && !isOpen) {
      return <ImageIcon src="/icons/folder-src.svg" />;
    } else if (fileName === "components" && !isOpen) {
      return <ImageIcon src="/icons/folder-components.svg" />;
    } else if (fileName === "components" && isOpen) {
      return <ImageIcon src="/icons/folder-components-open.svg" />;
    } else if (isFolder && isOpen) {
      return <ImageIcon src="/icons/folder-default-open.svg" />;
    } else if (isFolder && !isOpen) {
      return <ImageIcon src="/icons/folder-default.svg" />;
    }
  }
};

export default RenderFileIcon;
