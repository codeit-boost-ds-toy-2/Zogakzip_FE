import React, { useState } from "react";
import * as I from "../../styles/components/input/InputTextStyle";

function InputText({ label, placeholder }) {
  const [inputData, setInputData] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);

    // 한글 (자음, 모음 포함), a-z, A-Z, 0-9, !@#$%^_만 허용하는 정규식
    const validSpecialChars = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ!@#$%^_]*$/;
    if (!validSpecialChars.test(value)) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <>
      <I.Input>
        <I.Label>{label}</I.Label>
        <I.InputText placeholder={placeholder} type="text" value={inputData} onChange={handleInputChange} $isInvalid={showWarning} />
        {showWarning && <I.Warn>특수문자는 !@#$%^_만 사용하실 수 있습니다.</I.Warn>}
      </I.Input>
    </>
  );
}

export default InputText;
