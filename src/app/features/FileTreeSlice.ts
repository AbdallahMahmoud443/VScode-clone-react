import { createSlice } from "@reduxjs/toolkit";
import IFile from "../../interfaces";


interface IActiveFile {
    fileName:string;
    fileContent:String;
}

interface initialState {
    openFiles: IFile[];
    activeFile:IActiveFile;
}

const initialState:initialState = {
  openFiles: [],
  activeFile: {
    fileName: "",
    fileContent: "",
  },
};

const FileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {},
});

export default FileTreeSlice.reducer;
