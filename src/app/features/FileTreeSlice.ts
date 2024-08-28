import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IFile from "../../interfaces";


interface IActiveFile {
    fileName:string;
    fileContent:String | undefined;
}

interface initialState {
    activeFileId:String | null,
    openFiles: IFile[];
    activeFile:IActiveFile;
}

const initialState:initialState = {
  activeFileId:null,
  openFiles: [],
  activeFile: {
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
    setActiveFileId:(state,action:PayloadAction<string>)=>{
      state.activeFileId = action.payload;
    }
  },
});

export const {setOpenedFile,setActiveFile,setActiveFileId} = FileTreeSlice.actions // To Export Actions 

export default FileTreeSlice.reducer;
