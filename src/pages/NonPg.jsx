import React from "react";
import * as N from "../styles/NonPgStyle";

import Header from "../components/Header";
import NonImg from "../img/404.png";

function NonPg() {
  return (
    <>
      <Header showGroupCreateBtn={false} />
      <N.NonPg>
        <N.NonImg src={NonImg} alt="404" />
      </N.NonPg>
    </>
  );
}

export default NonPg;
