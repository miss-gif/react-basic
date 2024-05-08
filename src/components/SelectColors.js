import React from "react";
import { ColorConsumer } from "../contexts/colorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault(); // 기본동작 방지
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColors;
