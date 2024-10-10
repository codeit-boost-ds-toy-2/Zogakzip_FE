import React, { useState } from "react";
import * as I from "../../styles/components/input/InputSearchStyle";

import Search from "../../img/search.svg";

function InputSearch({ category }) {
  const getSearchText = () => {
    if (category === "group") {
      return "그룹명을 검색해 주세요";
    } else if (category === "memory") {
      return "태그 혹은 제목을 입력해 주세요";
    } else {
      return "검색";
    }
  };

  const [searchData, setSearchData] = useState("");

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const handleSearch = () => {
    if (searchData.trim() !== "") {
      // 검색어를 trim하여 공백을 제거하고 검색합니다.
      console.log(searchData);
    }
  };

  return (
    <>
      <I.InputSearch>
        <I.SearchImg src={Search} alt="검색" onClick={handleSearch} />
        <I.InputText placeholder={getSearchText()} type="text" value={searchData} onChange={handleInputChange} onKeyPress={handleOnKeyPress} />
      </I.InputSearch>
    </>
  );
}

export default InputSearch;
