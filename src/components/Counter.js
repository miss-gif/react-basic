import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

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
