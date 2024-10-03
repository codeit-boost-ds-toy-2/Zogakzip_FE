import React, { useState, useEffect } from "react";
import * as M from "../styles/components/GroupModalStyle";

import SizeLBtn from "./SizeLBtn";

const GroupModal = ({ onClose, status }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (status === "Success") {
      setTitle("그룹 만들기 성공");
      setContent("그룹이 성공적으로 등록되었습니다.");
    } else if (status === "Fail") {
      setTitle("그룹 만들기 실패");
      setContent("그룹 등록에 실패했습니다.");
    } else if (status === "Non") {
      setTitle("비공개 그룹 접근 실패");
      setContent("비밀번호가 일치하지 않습니다.");
    } else {
      setTitle("모달창 제목");
      setContent("모달창 내용");
    }
  }, [status]);

  return (
    <div>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap>
          <M.ModalTitle>{title}</M.ModalTitle>
          <M.ModalText>{content}</M.ModalText>
          <SizeLBtn text="확인" onClick={onClose} />
        </M.ModalWrap>
      </M.ModalSpace>
    </div>
  );
};

export default GroupModal;
