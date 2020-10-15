import React, { memo } from "react";

// 함수 컴포넌트
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "#ff6666";
  } else if (number <= 20) {
    background = "#ffb366";
  } else if (number <= 30) {
    background = "#ffff66";
  } else if (number <= 40) {
    background = "#d9ff66";
  } else {
    background = "#66d9ff";
  }
  return (
    <>
      <div className="ball" style={{ background }}>
        {number}
      </div>
    </>
  );
});

export default Ball;
