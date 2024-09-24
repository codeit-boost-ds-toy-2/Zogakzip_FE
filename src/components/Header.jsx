import React from "react";
import * as H from "../styles/components/HeaderStyle";

import Logo from "../img/logo.svg";

function Header() {
  return (
    <>
      <H.Header>
        <H.LogoImg src={Logo} alt="조각집" />
      </H.Header>
    </>
  );
}

export default Header;
