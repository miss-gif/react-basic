import React, { useState } from "react";

const ininState = { username: "", message: "" };

const Main = () => {
  const [memberInfo, setMemberInfo] = useState(ininState);

  const { username, message } = memberInfo;

  const onChange = event => {
    const nextMemberInfo = {
      ...memberInfo,
      [event.target.name]: event.target.value,
    };
    setMemberInfo(nextMemberInfo);
  };

  const onClick = () => {
    alert(`${username}: ${message}`);
    setMemberInfo(ininState);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyUp={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Main;
