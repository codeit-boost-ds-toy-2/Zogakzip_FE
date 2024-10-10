import styled from "styled-components";
import palette from "../../../lib/colorPalette";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.div`
  color: ${palette.black};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;

export const InputText = styled.input`
  width: calc(400px - 40px - 2px);
  height: calc(45px - 26px - 2px);
  padding: 13px 20px;
  border-radius: 6px;

  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  color: ${palette.black};
  border: 1px solid ${palette.gray200};
  outline: none;
  background: ${palette.gray50};

  &:focus {
    border: 1px solid ${palette.black};
  }
`;
