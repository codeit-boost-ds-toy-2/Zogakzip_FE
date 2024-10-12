import styled from "styled-components";
import palette from "../lib/colorPalette";

export const PostNon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Center = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: -80px;
`;

export const Title = styled.div`
  color: ${palette.black};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
`;

export const Text = styled.div`
  color: ${palette.black};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  margin-top: -40px;
`;
