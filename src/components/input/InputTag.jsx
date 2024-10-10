import React, { useState, useEffect } from "react";
import * as I from "../../styles/components/input/InputTagStyle";

import X from "../../img/x_gray.svg";

function InputTag() {
  const [inputData, setInputData] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTag(); // Enter를 누르면 태그 추가
    }
  };

  const handleAddTag = () => {
    const trimmedInput = inputData.trim();
    if (trimmedInput !== "" && !tags.includes(trimmedInput)) {
      // 중복된 태그가 없을 때만 추가
      setTags([...tags, trimmedInput]);
      setInputData("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // tags 상태가 업데이트될 때마다 콘솔에 출력
  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <>
      <I.Input>
        <I.Label>태그</I.Label>
        <I.InputText placeholder="태그 입력 후 Enter" type="text" value={inputData} onChange={handleInputChange} onKeyPress={handleOnKeyPress} />
        <I.TagSpace>
          {tags.map((tag, index) => (
            <I.Tag key={index}>
              #{tag}
              <I.TagClose src={X} alt="지우기" onClick={() => handleRemoveTag(tag)} />
            </I.Tag>
          ))}
        </I.TagSpace>
      </I.Input>
    </>
  );
}

export default InputTag;
