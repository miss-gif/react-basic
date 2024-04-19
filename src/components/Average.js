import React, { useRef, useState } from "react";

const getAverage = number => {
  if (number.length === 0) return 0;

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const sum = number.reduce((a, b) => a + b);
  return sum / number.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  // useRef
  const inputElement = useRef(0);

  // input 이벤트 핸들러
  const onChange = e => {
    setNumber(e.target.value);
  };

  const onClick = () => {
    if (isNaN(parseInt(number))) {
      setNumber("");
      return;
    }
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputElement.current.focus();
  };

  const avg = getAverage(list);

  const onKeydown = e => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div>
      <input
        onChange={onChange}
        value={number}
        ref={inputElement}
        onKeyDown={onKeydown}
      />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
