import styled from "styled-components";
import palette from "../../../lib/colorPalette";

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 48px;
    height: 24px;
    border-radius: 30px;
    background-color: ${palette.black};
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: ${palette.gray400};
    transition: ease-in-out 300ms;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${palette.gray50};
    transition: ease-in-out 300ms;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 25px;
    transition: ease-in-out 300ms;
  }
`;
