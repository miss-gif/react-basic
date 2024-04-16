import { useState } from "react";

const Main = () => {
  const [username, setUsername] = useState("");
  const onChangeUsername = e => setUsername(e.target.value);

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
    </div>
  );
};

export default Main;
