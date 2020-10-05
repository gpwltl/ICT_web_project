import React, { Component } from "react";
import "../../scss/NumberBaseball.scss";

class Try extends Component {
  render() {
    const { tryInfo } = this.props; // 구조 분해 문법
    return (
      <>
        <div className="try_num">
          [{tryInfo.try}] {tryInfo.result}
        </div>
      </>
    );
  }
}

export default Try;
