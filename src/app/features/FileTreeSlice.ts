import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IFile from "../../interfaces";


interface IActiveFile {
    activeFileId:String | null,
    fileName:string;
    fileContent:string | undefined;
}

interface initialState {
 
    openFiles: IFile[];
    activeFile:IActiveFile;
    tabIdToRemove:string | null;
}

const initialState:initialState = {
  openFiles: [],
  activeFile: {
    activeFileId:null,
    fileName: "",
    fileContent: "",
  },
  tabIdToRemove:null
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
    setTabIdToRemove:(state,action:PayloadAction<string>)=>{
      state.tabIdToRemove = action.payload
    }
  },
});

export const {setOpenedFile,setActiveFile,setTabIdToRemove} = FileTreeSlice.actions // To Export Actions 

export default FileTreeSlice.reducer;
