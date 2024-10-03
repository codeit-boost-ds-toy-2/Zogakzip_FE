import React from "react";
import * as G from "../styles/GroupStyle";

import Header from "../components/Header";

function Group() {
  return (
    <>
      <G.Group>
        <Header showSizeMBtn={true} />
        그룹 페이지
      </G.Group>
    </>
  );
}

export default Group;
