import React from "react";
import * as P from "../styles/PostNonStyle";

import Header from "../components/Header";
import InputText from "../components/input/InputText";
import SizeLBtn from "../components/SizeLBtn";

function PostNon() {
  const handlePostClick = () => {
    console.log("비공개 추억 접근 권환 확인 페이지 API 연동 예정");
  };

  return (
    <>
      <P.PostNon>
        <Header showSizeMBtn={false} />
        <P.Center>
          <P.Title>비공개 추억</P.Title>
          <P.Text>비공개 추억에 접근하기 위해 권한 확인이 필요합니다.</P.Text>
          <InputText label="비밀번호 입력" placeholder="추억 비밀번호를 입력해 주세요" category="password" />
          <SizeLBtn text="제출하기" onClick={handlePostClick} />
        </P.Center>
      </P.PostNon>
    </>
  );
}

export default PostNon;
