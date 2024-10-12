import React from "react";
import * as G from "../styles/GroupCreateStyle";

import Header from "../components/Header";
import InputText from "../components/input/InputText";
import InputImg from "../components/input/InputImg";
import InputBox from "../components/input/InputBox";
import Toggle from "../components/input/Toggle";
import SizeLBtn from "../components/SizeLBtn";

function GroupCreate() {
  const handleGroupClick = () => {
    console.log("그룹 만들기 API 연동 예정");
  };

  return (
    <>
      <G.GroupCreate>
        <Header showSizeMBtn={false} />
        <G.Title>그룹 만들기</G.Title>
        <G.Form>
          <InputText label="그룹명" placeholder="그룹명을 입력해 주세요" category="text" />
          <InputImg />
          <InputBox label="그룹 소개" placeholder="그룹을 소개해 주세요" />
          <G.InputOpen>
            <G.Label>그룹 공개 선택</G.Label>
            <G.Toggle>
              공개 <Toggle />
            </G.Toggle>
          </G.InputOpen>
          <InputText label="비밀번호 생성" placeholder="그룹 비밀번호를 생성해 주세요" category="password" />
        </G.Form>
        <SizeLBtn text="만들기" onClick={handleGroupClick} />
      </G.GroupCreate>
    </>
  );
}

export default GroupCreate;
