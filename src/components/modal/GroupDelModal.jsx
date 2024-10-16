import React from "react";
import * as M from "../../styles/components/modal/NonDelModalStyle";

import InputText from "../input/InputText";
import SizeLBtn from "../SizeLBtn";
import X from "../../img/x.svg";

const GroupDelModal = ({ onClose }) => {
  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap>
          <M.ModalCloseSpace>
            <M.ModalClose src={X} alt="닫기" onClick={onClose} />
          </M.ModalCloseSpace>
          <M.ModalTitle>그룹 삭제</M.ModalTitle>
          <InputText label="삭제 권한 인증" placeholder="그룹 비밀번호를 입력해 주세요" category="password" />
          <SizeLBtn text="삭제하기" onClick={onClose} />
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default GroupDelModal;
