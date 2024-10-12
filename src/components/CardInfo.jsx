import React from "react";
import * as C from "../styles/components/CardInfoStyle";

import Flower from "../img/flower.svg";
import img2 from "../img/img2.png";

function CardInfo({ type, data }) {
    const calculateDays = (createdAt) => {
        const creationDate = new Date(createdAt);
        const currentDate = new Date();
        const timeDifference = currentDate - creationDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return `D+${daysDifference}`;
    };

    const setVisibility = (isPublic) =>  {
        if (isPublic) {
            return "공개";
        } else {
            return "비공개";
        }
    }

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        const shortYear = year.slice(2);
        return `· ${shortYear}.${month}.${day}`;
    };

    if (type === "group") {
        return (
            <C.CardInfo>
                <div><C.Img src={data.imageUrl} alt="group" /></div>
                <div style={{minWidth: "1000px", marginLeft: "3%"}}>
                    <C.Top>
                        <C.Left>
                            <C.Date>{calculateDays(data.createdAt)}</C.Date>
                            <C.Bar>|</C.Bar>
                            <C.Visibility>{setVisibility(data.isPublic)}</C.Visibility>
                        </C.Left>
                        <C.Right>
                            <C.Edit>그룹 정보 수정하기</C.Edit>
                            <C.Delete>그룹 삭제하기</C.Delete>
                        </C.Right>
                    </C.Top>
                    <C.Middle>
                        <C.TitleLine>
                            <C.Title>{data.name}</C.Title>
                            <C.Sub>
                                <C.SubTex>추억</C.SubTex><C.SubTex>{data.postCount}</C.SubTex>
                                <C.BigBar>|</C.BigBar>
                                <C.SubTex>그룹 공감</C.SubTex><C.SubTex>{data.likeCount}</C.SubTex>
                            </C.Sub>
                        </C.TitleLine>
                        <C.Text>{data.introduction}</C.Text>
                    </C.Middle>
                    <C.Bottom>
                        <C.Button><img src={Flower} alt='like'/>공감 보내기</C.Button>
                    </C.Bottom>
                </div>
            </C.CardInfo>
        );
    } else if (type === "memory") {
        return (
            <C.CardInfo $type="memory">
                <C.Top>
                    <C.Left>
                        <C.Date>{data.nickname}</C.Date>
                        <C.Bar>|</C.Bar>
                        <C.Visibility>{setVisibility(data.isPublic)}</C.Visibility>
                    </C.Left>
                        <C.Right>
                            <C.Edit>추억 수정하기</C.Edit>
                            <C.Delete>추억 삭제하기</C.Delete>
                        </C.Right>
                    </C.Top>
                    <C.MemoryMiddle>
                        <C.Title>{data.title}</C.Title>
                        <C.Tags>
                            {data.tags.map((tag, index) => (
                                <div key={index}>#{tag}</div>
                            ))}
                        </C.Tags>
                    </C.MemoryMiddle>
                    <C.MemoryBottom>
                        <C.Left>
                            <C.BottomText>{data.location}</C.BottomText>
                            <C.BottomText style={{marginLeft: '10px', marginRight: '35px'}}>{formatDate(data.moment)}</C.BottomText>
                            <C.Like><div><img src={Flower} alt='like'/></div><div>{data.likeCount}</div></C.Like>
                        </C.Left>
                        <C.Button><img src={Flower} alt='like'/>공감 보내기</C.Button>
                    </C.MemoryBottom>
            </C.CardInfo>
        );
    } else {
        return "";
    }
}

export default CardInfo;
