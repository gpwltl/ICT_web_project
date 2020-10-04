import React from "react";
import ReviewList from "./review/ReviewList";

const Review = ({ isOpen, close }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <div align="center">
          <p>hello, review</p>
          <ReviewList />
          <button onClick={close}>돌아가기</button>{" "}
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default Review;
