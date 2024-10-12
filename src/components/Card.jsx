import React from "react";
import * as C from "../styles/components/CardStyle";

import Empty from "../img/empty.svg";

function Card({ type }) {

    const getTitle = () => {
        if (type === "group") {
            return "등록된 공개 그룹이 없습니다.";
        } else if (type === "memory") {
            return "게시된 추억이 없습니다.";
        } else {
            return "";
        }
    };

    const getText = () => {
        if (type === "group") {
            return "가장 먼저 그룹을 만들어보세요!";
        } else if (type === "memory") {
            return "첫 번째 추억을 올려보세요!";
        } else {
            return "";
        }
    };

    return (
        <C.Card>
            <C.EmptyImg src={Empty} alt="empty" />
            <C.Title>{getTitle()}</C.Title>
            <C.Text>{getText()}</C.Text>
        </C.Card>
    );
}

export default Card;
