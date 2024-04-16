import { useState } from "react";

const Main = ({ title, children }) => {
  const [message, setMessage] = useState("");

  const [color, setColor] = useState("black");

  const onClickEnter = () => {
    setMessage("안녕");
    setColor("red");
  };

  const onClickLeave = () => {
    setMessage("바이");
    setColor("blue");
  };

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
    { id: 4, value: true },
    { id: 5, value: false },
    { id: 6, value: true },
  ];

  let nextArray = array.concat({ id: 7 }); // 새 항목 추가
  nextArray = nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
  // id가 1인 항목의 value를 false로 설정
  nextArray = nextArray.map(item =>
    item.id === 1 ? { ...item, value: false } : item,
  );

  console.log(array);
  console.log(nextArray);

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <p style={{ color }}>{message}</p>
    </>
  );
};

export default Main;
