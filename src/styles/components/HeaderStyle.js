import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Header = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.gray50};
`;

export const LogoImg = styled.img`
  width: 137px;
`;
