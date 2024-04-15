import React from "react";
import styled from "@emotion/styled";

const Title = styled.div`
  background: #eee;
  font-size: 80px;
`;

const Main = () => {
  const title = "리액트";

  return (
    <div>
      {title}

      <Title>test</Title>
    </div>
  );
};

export default Main;
