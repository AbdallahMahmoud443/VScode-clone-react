import extensionIconPath from "../constants";
import ImageIcon from "./ImageIcon";
import FileIcon from "./svg/FileIcon";
interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();
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

    return <ImageIcon src={iconPath} />;
  }

  // **  Default Icon belong to folder
  if (isFolder && isOpen) {
    return <ImageIcon src="/icons/folder-default-open.svg" />;
  } else if (isFolder && !isOpen) {
    return <ImageIcon src="/icons/folder-default.svg" />;
  }
  // ** default Icon belong to File
  return <FileIcon />;
};

export default RenderFileIcon;
