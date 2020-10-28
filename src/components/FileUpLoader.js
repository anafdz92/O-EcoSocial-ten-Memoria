import React, { useRef, Component } from "react";

const FileUploader = (props, { onFileSelect }) => {
  const fileInput = useRef(null);
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    props.onFileSelectSuccess(file);
  };

  return (
    <>
      <div className="file-uploader">
        <input type="file" onChange={handleFileInput} />
      </div>
      {/* <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      ></button> */}
    </>
  );
};
export default FileUploader;
