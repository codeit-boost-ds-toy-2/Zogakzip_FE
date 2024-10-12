import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const CardBox = styled.div`
    width: 335px;
    border-radius: 12px;
    border: 1px solid #DDD;
    background: ${palette.gray50};
    padding: 20px;
`;

export const Img = styled.div`
    width: 335px;
    height: 335px;
    border-radius: 6px;
    margin-bottom: 20px;
`;

export const EmptyImg = styled.div`
    width: 335px;
    height: 335px;
    border-radius: 6px;
    background-color: #EFEDE4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    & img {
        width: 122px;
        height: 122px;
    }
`;

export const Top = styled.div`
    display: flex;
    width: 335px;
    margin-bottom: 20px;
`;

export const Date = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
`;

export const Bar = styled.div`
    width: 4px;
    align-items: center;
    color: ${palette.gray400};
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
    margin: 0 10px;
`;

export const Visibility = styled.div`
    align-items: center;
    color: ${palette.gray400};
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
`;

export const Middle = styled.div`
    width: 335px;
    margin-bottom: 20px;
`;

export const Title = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.48px;
    margin-bottom: 10px;
`;

export const Text = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
`;

export const Bottom = styled.div`
    display: flex;
    width: 335px;
`;

export const BottomBox = styled.div`
    color: ${palette.gray400};
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.36px;
    margin-right: 40px;
    & div {
        align-items: center;
        color: ${palette.black};
        font-family: "Spoqa Han Sans Neo";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.42px;
        margin-top: 5px;
    }
    & div img {
        width: 18px;
        height: 17.307px;
        margin-right: 5px;
    }
`;

export const Tags = styled.div`
    display: flex;
    & div {
        align-items: center;
        color: ${palette.gray400};
        font-family: "Spoqa Han Sans Neo";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.42px;
        margin-right: 5px;
    }
`;

export const MemoryBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const BottomTex = styled.div`
    align-items: center;
    color: ${palette.black};
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.36px;
    margin-right: 5px;
`;

export const BottomImg = styled.div`
    display: flex;
    align-items: center;
    color: ${palette.gray400};
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
    & div {
        display: flex;
        align-items: center;
    }
    & div img {
        width: ${(props) => (props.imgType === 'flower' ? '18px' : '24px')};
        padding-top: ${(props) => (props.imgType === 'flower' ? '3px' : '')};
        padding-bottom: ${(props) => (props.imgType === 'flower' ? '3.69px' : '')};
        height: ${(props) => (props.imgType === 'flower' ? '17.307px' : '24px')};
        margin-right: 8px;
    }
`;
