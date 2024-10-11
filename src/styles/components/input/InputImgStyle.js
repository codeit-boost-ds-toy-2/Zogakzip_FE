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
  display: none;
`;

export const FileInputWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FileUploadButton = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid ${palette.black};
  background: ${palette.gray50};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.black};
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  cursor: pointer;
`;

export const InputTextDisplay = styled.div`
  width: calc(290px - 40px - 2px);
  height: calc(45px - 26px - 2px);
  padding: 13px 20px;
  border-radius: 6px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  border: 1px solid ${palette.gray200};
  background: ${palette.gray50};
  display: flex;
  align-items: center;

  color: ${(props) => (props.$isFileSelected ? `${palette.black}` : `${palette.gray400}`)};

  &:focus {
    border: 1px solid ${palette.black};
  }
`;
