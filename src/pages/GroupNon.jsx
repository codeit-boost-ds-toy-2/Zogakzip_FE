import React from "react";
import * as G from "../styles/GroupNonStyle";

import Header from "../components/Header";
import InputText from "../components/input/InputText";
import SizeLBtn from "../components/SizeLBtn";

function GroupNon() {
  const handleGroupClick = () => {
    console.log("비공개 그룹 접근 권환 확인 페이지 API 연동 예정");
  };

  return (
    <>
      <G.GroupNon>
        <Header showSizeMBtn={false} />
        <G.Center>
          <G.Title>비공개 그룹</G.Title>
          <G.Text>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.</G.Text>
          <InputText label="비밀번호 입력" placeholder="그룹 비밀번호를 입력해 주세요" category="password" />
          <SizeLBtn text="제출하기" onClick={handleGroupClick} />
        </G.Center>
      </G.GroupNon>
    </>
  );
}

export default GroupNon;
