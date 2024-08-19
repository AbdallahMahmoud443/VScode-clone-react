import IFile from "../interfaces";

export const fileTree:IFile = {
  name: "VsCode Clone",
  isFolder:true,
  children: [
    {
      name: "node_modules", // Folder
      isFolder:true,
    },
    {
      name: "index.html", // File
      isFolder:false,
    },
  ],
};
