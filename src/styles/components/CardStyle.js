import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Card = styled.div`
    width: 100vw;
    height: 201.5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const EmptyImg = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;

export const Title = styled.div`
    color: ${palette.gray500};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.54px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div`
    color: ${palette.gray500};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

