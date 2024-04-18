import React, { useEffect, useState } from "react";

const Counter = () => {
  console.log("카운터 컴포넌트 렌더링");
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    console.log(value);
    return () => {
      console.log("cleanup");
      console.log("cleanup", value);
    };
  }, [value]);

  return (
    <div>
      <p>
        현재 카운터 값은 <b> {value} 입니다</b>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          1증가
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          1감소
        </button>
      </p>
    </div>
  );
};

export default Counter;
