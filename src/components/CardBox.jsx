import React, { useState } from "react";
import * as C from "../styles/components/CardBoxStyle";

import Flower from "../img/flower.svg";
import Bubble from "../img/bubble.svg";

function CardBox({ type, data }) {

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

    const handleClick = () => {
        if (type === 'group') {
            navigate(`/group/${data.id}`);
        } else if (type === 'memory') {
            navigate(`/memory/${data.id}`);
        }
    };
    
    if (type === "group") {
        return (
            <C.CardBox onClick={handleClick}>
                {data.isPublic && (
                    <>
                        <C.Img src={data.imageUrl} alt="group" style={{ display: data.imageUrl && data.imageUrl !== "" ? 'block' : 'none' }}/>
                        {(!data.imageUrl || data.imageUrl === "") && <C.EmptyImg><img src={Flower} alt="logo"/></C.EmptyImg>}
                    </>
                )}
                <C.Top>
                    <C.Date>{calculateDays(data.createdAt)}</C.Date>
                    <C.Bar>|</C.Bar>
                    <C.Visibility>{setVisibility(data.isPublic)}</C.Visibility>
                </C.Top>
                <C.Middle>
                    <C.Title>{data.name}</C.Title>
                    {data.isPublic && (
                        <C.Text>{data.introduction}</C.Text>
                    )}
                </C.Middle>
                <C.Bottom>
                    { data.isPublic && (
                        <C.BottomBox>획득 배지<div>{data.badgeCount}</div></C.BottomBox>
                    )}
                    <C.BottomBox>추억<div>{data.postCount}</div></C.BottomBox>
                    <C.BottomBox>그룹 공감<div><img src={Flower} alt='like'/>{data.likeCount}</div></C.BottomBox>
                </C.Bottom>
            </C.CardBox>
        );
    } else if (type === "memory") {
        return (
            <C.CardBox onClick={handleClick}>
                {data.isPublic && (
                    <C.Img src={data.imageUrl} alt="memory"/>
                )}
                <C.Top>
                    <C.Date>{data.nickname}</C.Date>
                    <C.Bar>|</C.Bar>
                    <C.Visibility>{setVisibility(data.isPublic)}</C.Visibility>
                </C.Top>
                <C.Middle>
                    <C.Title>{data.title}</C.Title>
                    {data.isPublic && (
                        <C.Tags>
                            {data.tags.map((tag, index) => (
                                <div key={index}>#{tag}</div>
                            ))}
                        </C.Tags>
                    )}
                </C.Middle>
                <C.MemoryBottom>
                    { data.isPublic && (
                        <C.Left>
                            <C.BottomTex>{data.location}</C.BottomTex>
                            <C.BottomTex>{formatDate(data.moment)}</C.BottomTex>
                        </C.Left>
                    )}
                    <C.Right>
                        <C.BottomImg $imgType="flower" style={{marginRight: "20px"}}><div><img src={Flower} alt='like'/></div><div>{data.likeCount}</div></C.BottomImg>
                        <C.BottomImg $imgType="bubble"><div><img src={Bubble} alt='like'/></div><div>{data.commentCount}</div></C.BottomImg>
                    </C.Right>
                </C.MemoryBottom>
            </C.CardBox>
        );
    } else {
        return "";
    }
}

export default CardBox;
