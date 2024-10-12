import React, { useState } from "react";
import * as I from "../../styles/components/input/InputImgStyle";

function InputImg({ category }) {
  const [fileName, setFileName] = useState("파일을 선택해 주세요");
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("파일을 선택해 주세요");
    }
  };

  return (
    <>
      <I.Input>
        <I.Label>{category === "memory" ? "이미지" : "대표 이미지"}</I.Label>
        <I.FileInputWrapper>
          <I.InputText type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
          <I.InputTextDisplay $isFileSelected={fileName !== "파일을 선택해 주세요"}>{fileName}</I.InputTextDisplay>
          <I.FileUploadButton onClick={handleButtonClick}>파일 선택</I.FileUploadButton>
        </I.FileInputWrapper>
      </I.Input>
    </>
  );
}

export default InputImg;
