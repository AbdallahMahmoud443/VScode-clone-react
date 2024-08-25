import ImageIcon from "./ImageIcon";
import FileIcon from "./svg/FileIcon";
interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

//* Object That include all file and folder paths
const extensionIconPath: Record<string, string> = {
  // ** File Icons
  tsx: "/icons/react_ts",
  jsx: "/icons/react",
  html: "/icons/html",

  // ** Folder Icons
  node_modules: "/icons/folder-node",
  public: "/icons/folder-public",
  src: "/icons/folder-src",
  components: "/icons/folder-components",
};

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  // if (!isFolder) {
  //   const extension = fileName.split(".").pop();
  //   if (extension === "tsx") return <ImageIcon src="/icons/react_ts.svg" />;
  //   if (extension === "jsx") return <ImageIcon src="/icons/react.svg" />;
  //   if (extension === "html") return <ImageIcon src="/icons/html.svg" />;
  //   return <FileIcon />;

  // } else {
  //   if (fileName === "node_modules" && isOpen) {
  //     return <ImageIcon src="/icons/folder-node-open.svg" />;
  //   } else if (fileName === "node_modules" && !isOpen) {
  //     return <ImageIcon src="/icons/folder-node.svg" />;
  //   } else if (fileName === "public" && isOpen) {
  //     return <ImageIcon src="/icons/folder-public-open.svg" />;
  //   } else if (fileName === "public" && !isOpen) {
  //     return <ImageIcon src="/icons/folder-public.svg" />;
  //   } else if (fileName === "src" && isOpen) {
  //     return <ImageIcon src="/icons/folder-src-open.svg" />;
  //   } else if (fileName === "src" && !isOpen) {
  //     return <ImageIcon src="/icons/folder-src.svg" />;
  //   } else if (fileName === "components" && !isOpen) {
  //     return <ImageIcon src="/icons/folder-components.svg" />;
  //   } else if (fileName === "components" && isOpen) {
  //     return <ImageIcon src="/icons/folder-components-open.svg" />;
  //   }

  const extension = fileName.split(".").pop();
  console.log(extension)
  // check extension and do object include this extension
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPath, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPath[extension]}-open.svg`
        : `${extensionIconPath[extension]}.svg`
      : `${extensionIconPath[extension]}.svg`;

    return <ImageIcon src={iconPath} />
  }
 
  // **  Default Icon belong to folder 
  if (isFolder && isOpen) {
    return <ImageIcon src="/icons/folder-default-open.svg" />;
  } else if (isFolder && !isOpen) {
    return <ImageIcon src="/icons/folder-default.svg" />;
  }
  // ** default Icon belong to File
  return <FileIcon/>

};

export default RenderFileIcon;
