import React, { useState } from "react";
import * as T from "../../styles/components/input/ToggleStyle";

function Toggle() {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <T.ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
      </T.ToggleContainer>
    </>
  );
}

export default Toggle;
