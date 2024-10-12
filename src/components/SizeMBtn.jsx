import React from "react";
import { useNavigate } from "react-router-dom";
import * as G from "../styles/components/SizeMBtnStyle";

function SizeMBtn({ category }) {
  const getButtonText = () => {
    if (category === "group") {
      return "그룹 만들기";
    } else if (category === "memory") {
      return "추억 올리기";
    } else {
      return "버튼";
    }
  };

  const handleClick = () => {
    if (category === "group") {
      groupClick();
    } else if (category === "memory") {
      memoryClick();
    }
  };

  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const groupClick = () => {
    handleNavLinkClick("/create");
  };

  const memoryClick = () => {
    console.log("추억 올리기 모달 추가 예정");
  };

  return (
    <>
      <G.Btn onClick={handleClick}>{getButtonText()}</G.Btn>
    </>
  );
}

export default SizeMBtn;
