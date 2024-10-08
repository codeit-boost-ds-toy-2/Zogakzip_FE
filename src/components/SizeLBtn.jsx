import React from "react";
import * as G from "../styles/components/SizeLBtnStyle";

function SizeLBtn({ text, onClick }) {
  return (
    <>
      <G.Btn onClick={onClick}>{text}</G.Btn>
    </>
  );
}

export default SizeLBtn;
