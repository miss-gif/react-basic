import React from "react";

const Main = ({ title, children }) => {
  // const { title, children } = props;

  return (
    <div>
      <h1>title, 나는{title}입니다.</h1>
      <h1>children, 나는{children}입니다.</h1>
    </div>
  );
};

Main.defaultProps = {
  title: "기본 이름",
};

export default Main;
