import React, { useState } from "react";
import * as I from "../../styles/components/input/InputDateStyle";

function InputDate() {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputData(value);
  };

  return (
    <>
      <I.Input>
        <I.Label>추억의 순간</I.Label>
        <I.InputText type="date" value={inputData} onChange={handleInputChange} />
      </I.Input>
    </>
  );
}

export default InputDate;
