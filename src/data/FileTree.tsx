import IFile from "../interfaces";
import { v4 as uuidv4 } from 'uuid';
//? folder and file are same object =>{name,isFolder,children?,content?} (?) => means optional
export const fileTree: IFile = {
  id:uuidv4(),
  name: "VsCode Clone", // Folder 1
  isFolder: true,
  children: [
    {
      id:uuidv4(),
      name: "node_modules", // Folder 2
      isFolder: true,
      children: [
        {
          id:uuidv4(),
          name: ".vite", // Folder 3
          isFolder: true,
          children: [
            {
              id:uuidv4(),
              name: "react.tsx", // Folder 3 File  1
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id:uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id:uuidv4(),
          name: "index.html", // Folder 1 File 1
          isFolder: false,
        },
      ],
    },
    {
      id:uuidv4(),
      name:"src",
      isFolder:true,
      children:[
        {
          id:uuidv4(),
          name:"components",
          isFolder:true,
          children:[
            {
              id:uuidv4(),
              name:'Button.tsx',
              isFolder:false,
              content:`Button Component In React :)`
            },
            {
              id:uuidv4(),
              name:'Index.txt',
              isFolder:false
            },
          ]
        }
      ]
    }
  ],
};
