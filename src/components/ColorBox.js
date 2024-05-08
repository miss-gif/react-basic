import React from "react";
import { ColorConsumer } from "../contexts/colorContext";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{ width: "200px", height: "200px", background: state.color }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
