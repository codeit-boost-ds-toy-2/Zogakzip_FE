import React, { useState } from "react";
import * as I from "../../styles/components/input/InputBoxStyle";

function InputBox({ label, placeholder }) {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
  };

  return (
    <>
      <I.Input>
        <I.Label>{label}</I.Label>
        <I.InputText placeholder={placeholder} type="textarea" value={inputData} onChange={handleInputChange} />
      </I.Input>
    </>
  );
}

export default InputBox;
