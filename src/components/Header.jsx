import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";

import Logo from "../img/logo.svg";
import SizeMBtn from "./SizeMBtn";

function Header({ showSizeMBtn }) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <H.Header>
        <H.Blank />
        <H.LogoImg src={Logo} alt="조각집" onClick={() => handleNavLinkClick("/")} />
        <H.Blank>{showSizeMBtn ? <SizeMBtn category="group" /> : null}</H.Blank>
      </H.Header>
    </>
  );
}

export default Header;
