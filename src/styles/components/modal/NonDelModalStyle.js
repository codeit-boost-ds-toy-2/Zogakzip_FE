import styled from "styled-components";
import palette from "../../../lib/colorPalette";

export const ModalSpace = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.div`
  width: calc(480px - 80px);
  padding: 40px;
  border-radius: 6px;
  z-index: 2;
  background-color: ${palette.gray50};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const ModalTitle = styled.div`
  color: ${palette.black};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-bottom: -20px;
`;

export const ModalCloseSpace = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  margin-top: -20px;
  margin-right: -20px;
  margin-bottom: -70px;
`;

export const ModalClose = styled.img`
  width: 30px;
  cursor: pointer;
`;
