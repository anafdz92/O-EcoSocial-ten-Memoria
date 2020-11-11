import React from "react";

const FileUploader = (props) => {
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    props.onFileSelectSuccess(file);
  };

  return (
    <>
      <div className="file-uploader">
        <input type="file" onChange={handleFileInput} />
      </div>
    </>
  );
};
export default FileUploader;
