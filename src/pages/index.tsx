import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Home = () => {
  const [img, setImg] = useState<string[] | []>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImg(
      acceptedFiles.map((acceptedFile) => URL.createObjectURL(acceptedFile))
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(img);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag drop some files here, or click to select files</p>
      )}
      {img.map((url) => (
        <div key={url?.toString()} className="border border-dark m-2">
          <img src={url} alt="" style={{ maxWidth: 320, maxHeight: 240 }} />
        </div>
      ))}{" "}
    </div>
  );
};
export default Home;
