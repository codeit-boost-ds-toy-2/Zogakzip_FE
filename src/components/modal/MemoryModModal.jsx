import React from "react";
import * as M from "../../styles/components/modal/MemoryModModalStyle";

import InputText from "../input/InputText";
import InputImg from "../input/InputImg";
import InputBox from "../input/InputBox";
import InputTag from "../input/InputTag";
import InputDate from "../input/InputDate";
import Toggle from "../input/Toggle";
import SizeLBtn from "../SizeLBtn";
import X from "../../img/x.svg";

const MemoryModModal = ({ onClose }) => {
  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap>
          <M.ModalCloseSpace>
            <M.ModalClose src={X} alt="닫기" onClick={onClose} />
          </M.ModalCloseSpace>
          <M.ModalTitle>추억 수정</M.ModalTitle>
          <M.FormBox>
            <M.Form>
              <InputText label="닉네임" placeholder="닉네임을 입력해 주세요" category="text" />
              <InputText label="제목" placeholder="제목을 입력해 주세요" category="text" />
              <InputImg category="memory" />
              <InputBox label="본문" placeholder="본문 내용을 입력해 주세요" />
            </M.Form>
            <M.Line />
            <M.Form>
              <InputTag />
              <InputText label="장소" placeholder="장소를 입력해 주세요" category="text" />
              <InputDate />
              <M.InputOpen>
                <M.Label>추억 공개 선택</M.Label>
                <M.Toggle>
                  공개 <Toggle />
                </M.Toggle>
              </M.InputOpen>
              <InputText label="수정 권한 인증" placeholder="추억 비밀번호를 입력해 주세요" category="password" />
            </M.Form>
          </M.FormBox>
          <SizeLBtn text="수정하기" onClick={onClose} />
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default MemoryModModal;
