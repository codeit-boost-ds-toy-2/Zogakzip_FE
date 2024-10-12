import styled from "styled-components";
import palette from "../lib/colorPalette";

export const PostCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding-bottom: 60px;
`;

export const Title = styled.div`
  color: ${palette.black};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-top: -20px;
`;

export const FormBox = styled.div`
  display: flex;
  gap: 80px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Line = styled.div`
  width: 1px;
  height: 575px;
  background-color: ${palette.gray200};
  opacity: 0.5;
`;

export const InputOpen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const Label = styled.div`
  color: ${palette.black};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;

export const Toggle = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  color: ${palette.black};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const CloseBtn = styled.img`
  width: 34px;
  cursor: pointer;

  position: absolute;
  top: 122px;
  left: calc(50vw + 480px + 60px);
`;
