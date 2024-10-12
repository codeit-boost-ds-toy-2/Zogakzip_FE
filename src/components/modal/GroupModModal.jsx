import React from "react";
import * as M from "../../styles/components/modal/GroupModModalStyle";

import InputText from "../input/InputText";
import InputImg from "../input/InputImg";
import InputBox from "../input/InputBox";
import Toggle from "../input/Toggle";
import SizeLBtn from "../SizeLBtn";
import X from "../../img/x.svg";

const GroupModModal = ({ onClose }) => {
  return (
    <>
      <M.ModalBackground onClick={onClose} />
      <M.ModalSpace>
        <M.ModalWrap>
          <M.ModalCloseSpace>
            <M.ModalClose src={X} alt="닫기" onClick={onClose} />
          </M.ModalCloseSpace>
          <M.ModalTitle>그룹 정보 수정</M.ModalTitle>
          <M.Form>
            <InputText label="그룹명" placeholder="그룹명을 입력해 주세요" category="text" />
            <InputImg />
            <InputBox label="그룹 소개" placeholder="그룹을 소개해 주세요" />
            <M.InputOpen>
              <M.Label>그룹 공개 선택</M.Label>
              <M.Toggle>
                공개 <Toggle />
              </M.Toggle>
            </M.InputOpen>
            <InputText label="수정 권한 인증" placeholder="그룹 비밀번호를 입력해 주세요" category="password" />
          </M.Form>
          <SizeLBtn text="수정하기" onClick={onClose} />
        </M.ModalWrap>
      </M.ModalSpace>
    </>
  );
};

export default GroupModModal;
