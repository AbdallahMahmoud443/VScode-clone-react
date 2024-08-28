import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IFile from "../../interfaces";


interface IActiveFile {
    activeFileId:String | null,
    fileName:string;
    fileContent:String | undefined;
}

interface initialState {
 
    openFiles: IFile[];
    activeFile:IActiveFile;
}

const initialState:initialState = {
  openFiles: [],
  activeFile: {
    activeFileId:null,
    fileName: "",
    fileContent: "",
  },
};

const FileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFile : (state,action:PayloadAction<IFile[]>)=>{ //* <IFile[]> To Ensure sure enter all attributes correct
            state.openFiles = action.payload

    },
    setActiveFile:(state,action:PayloadAction<IActiveFile>)=>{
      state.activeFile = action.payload
    },
  },
});

export const {setOpenedFile,setActiveFile} = FileTreeSlice.actions // To Export Actions 

export default FileTreeSlice.reducer;
