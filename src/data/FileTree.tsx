import IFile from "../interfaces";
//? folder and file are same object =>{name,isFolder,children?,content?} (?) => means optional
export const fileTree: IFile = {
  name: "VsCode Clone", // Folder 1
  isFolder: true,
  children: [
    {
      name: "node_modules", // Folder 2
      isFolder: true,
      children: [
        {
          name: ".vite", // Folder 3
          isFolder: true,
          children: [
            {
              name: "react.tsx",  // Folder 3 File  1
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "index.html", // Folder 1 File 1
      isFolder: false,
    },
  ],
};
