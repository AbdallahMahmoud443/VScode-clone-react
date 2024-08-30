interface IProps {
  src: string;
  className?:string

}

const ImageIcon = ({ src ,className}: IProps) => {
  return (
    <>
      <img src={src} width={20} height={20} className={className}/>
    </>
  );
};

export default ImageIcon;
