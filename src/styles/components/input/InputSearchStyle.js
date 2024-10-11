import styled from "styled-components";
import palette from "../../../lib/colorPalette";

export const InputSearch = styled.div`
  width: calc(100% - 374px - 40px);
  height: calc(45px - 20px);
  border-radius: 6px;
  background: ${palette.gray100};

  padding: 10px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const InputText = styled.input`
  width: 100%;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  color: ${palette.black};
  border: none;
  outline: none;
  background: ${palette.gray100};
`;
