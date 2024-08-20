interface IProps {
src:string

}

const ImageIcon =({src}:IProps)=>{
    return(
        <>
            <img src={src} width={20} height={20} />
        </>
    );
};

export default ImageIcon;