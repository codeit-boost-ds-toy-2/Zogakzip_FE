import React, { useState } from "react";
import * as I from "../../styles/components/input/InputTextStyle";

function InputText({ label, placeholder, category }) {
  const [inputData, setInputData] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);

    let validSpecialChars;
    let warningMsg;

    // category가 text일 때
    if (category === "text") {
      // 한글 (자음, 모음 포함), a-z, A-Z, 0-9, !@#$%^_, 띄어쓰기만 허용하는 정규식
      validSpecialChars = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ!@#$%^_\s]*$/;
      warningMsg = "특수문자는 !@#$%^_만 사용하실 수 있습니다.";
    }
    // category가 password일 때
    else if (category === "password") {
      validSpecialChars = /^[a-zA-Z0-9!@#$%^_]*$/;
      warningMsg = "영문 소문자, 대문자, 숫자, 특수문자 !@#$%^_만 사용하실 수 있습니다.";
    }

    if (!validSpecialChars.test(value)) {
      setShowWarning(true);
      setWarningMessage(warningMsg);
    } else {
      setShowWarning(false);
      setWarningMessage("");
    }
  };

  return (
    <>
      <I.Input>
        <I.Label>{label}</I.Label>
        <I.InputText
          placeholder={placeholder}
          type={category === "password" ? "password" : "text"}
          value={inputData}
          onChange={handleInputChange}
          $isInvalid={showWarning}
        />
        {showWarning && <I.Warn>{warningMessage}</I.Warn>}
      </I.Input>
    </>
  );
}

export default InputText;
