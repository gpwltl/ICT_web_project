import React, { Component } from "react";
import "../../scss/Gugudan.scss";

class Gugudan extends Component {
  state = {
    firstNum: Math.floor(Math.random() * 9) + 1,
    secondNum: Math.floor(Math.random() * 9) + 1,
    resultNum: "",
    value: "",
    correct: "",
    wrong: "",
    count: 0,
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (
      parseInt(this.state.value) ===
      this.state.firstNum * this.state.secondNum
    ) {
      this.setState({
        value: "",
        correct: "정답! +10",
        wrong: "",
        firstNum: Math.floor(Math.random() * 9) + 1,
        secondNum: Math.floor(Math.random() * 9) + 1,
        count: this.state.count + 10,
      });
    } else {
      this.setState({
        correct: "",
        wrong: "땡!",
        value: "",
      });
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="title_g">구구단</h1>
        <div className="rule">
          <h3>Rule</h3>
          <p>1. 두 숫자를 확인해주세요 !</p>
          <p>2. 두 숫자의 곱한 값을 입력해주세요 (숫자만 입력하세요!)</p>
          <p>3. 정답을 맞추면 플러스 10점! 점수를 채워볼까요?!</p>
        </div>

        <div className="num">
          <div>
            {this.state.firstNum} x {this.state.secondNum} = {this.state.value}
          </div>
        </div>

        <form onSubmit={this.onSubmitForm} className="input_g">
          <input value={this.state.value} onChange={this.onChangeInput}></input>
          <button>입력</button>
        </form>

        <div className="count_g">
          <h3>점수</h3>
          {this.state.count}
        </div>
        <div className="result-correct_g">{this.state.correct}</div>
        <div className="result-wrong_g">{this.state.wrong}</div>
      </React.Fragment>
    );
  }
}

export default Gugudan;
