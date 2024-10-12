import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/PostCreateStyle";

import Header from "../components/Header";
import InputText from "../components/input/InputText";
import InputImg from "../components/input/InputImg";
import InputBox from "../components/input/InputBox";
import InputTag from "../components/input/InputTag";
import InputDate from "../components/input/InputDate";
import Toggle from "../components/input/Toggle";
import SizeLBtn from "../components/SizeLBtn";
import X from "../img/x.svg";

import MemoryNonModal from "../components/modal/MemoryNonModal";

function PostCreate() {
  const handlePostClick = () => {
    console.log("추억 올리기 API 연동 예정");
    openModal();
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <P.PostCreate>
        <Header showSizeMBtn={false} />
        <P.Title>추억 올리기</P.Title>
        <P.FormBox>
          <P.Form>
            <InputText label="닉네임" placeholder="닉네임을 입력해 주세요" category="text" />
            <InputText label="제목" placeholder="제목을 입력해 주세요" category="text" />
            <InputImg category="memory" />
            <InputBox label="본문" placeholder="본문 내용을 입력해 주세요" />
          </P.Form>
          <P.Line />
          <P.Form>
            <InputTag />
            <InputText label="장소" placeholder="장소를 입력해 주세요" category="text" />
            <InputDate />
            <P.InputOpen>
              <P.Label>추억 공개 선택</P.Label>
              <P.Toggle>
                공개 <Toggle />
              </P.Toggle>
            </P.InputOpen>
            <InputText label="비밀번호 생성" placeholder="추억 비밀번호를 생성해 주세요" category="password" />
          </P.Form>
        </P.FormBox>
        <P.CloseBtn src={X} alt="닫기" onClick={() => handleBackClick()} />
        <SizeLBtn text="올리기" onClick={handlePostClick} />
      </P.PostCreate>
      {isModalOpen && <MemoryNonModal onClose={closeModal} />}
    </>
  );
}

export default PostCreate;
