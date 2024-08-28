import IFile from "../interfaces"

export const isFileObjectExist = function(FilesArray:IFile[],id:string){
    return FilesArray.some((file) =>file.id === id);
}