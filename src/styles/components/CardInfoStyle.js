import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const CardInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.$type === 'memory' ? 'column' : 'row')};
    justify-content: center;
`;

export const Img = styled.img`
    width: 262px;
    height: 273px;
    border-radius: 6px;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
`;

export const Date = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
`;

export const Bar = styled.div`
    width: 4px;
    align-items: center;
    color: ${palette.gray400};
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
    margin: 0 15px;
`;

export const Visibility = styled.div`
    align-items: center;
    color: ${palette.gray500};
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
`;

export const Right = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
`;

export const Edit = styled.div`
    align-items: center;
    color: ${palette.black};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
`;

export const Delete = styled.div`
    align-items: center;
    color: ${palette.gray500};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
letter-spacing: -0.42px;
`;

export const Middle = styled.div`
    width: 100%;
`;

export const MemoryMiddle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 0;
`;

export const TitleLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    margin: 20px 0;
`;

export const Title = styled.div`
    align-items: center;
    max-width: calc(100% - 294px);
    color: ${palette.black};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.9px;
`;

export const Sub = styled.div`
    display: flex;
    align-items: center;
`;

export const SubTex = styled.div`
    align-items: center;
    color: ${palette.black};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.54px;
    margin-right: 10px;
`;

export const BigBar = styled.div`
    align-items: center;
    color: ${palette.gray400};
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.54px;
    margin: 0 30px;
`;

export const Text = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.54px;
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    & div {
        align-items: center;
        color: ${palette.gray400};
        font-family: "Spoqa Han Sans Neo";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.54px;
        margin-right: 10px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 95px;
`;

export const MemoryBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 12px;
`;

export const BottomText = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.54px;
`;

export const Like = styled.div`
    display: flex;
    align-items: center;
    color:  ${palette.gray500};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    & img {
        width: 22.881px;
        height: 22px;
        margin-right: 10px;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 22px;
    padding: 15px 30px;
    align-items: center;
    border-radius: 6px;
    border: 1px solid ${palette.black};
    background-color: ${palette.white};
    color:  ${palette.black};
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    & img {
        width: 22.881px;
        height: 22px;
        margin-right: 10px;
    }
`;