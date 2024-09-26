import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Header = styled.div`
  width: calc(100vw - 360px);
  height: 100px;
  padding: 0 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.gray50};
`;

export const LogoImg = styled.img`
  width: 137px;
  cursor: pointer;
`;

export const Blank = styled.div`
  width: 200px;
  height: 45px;
`;
