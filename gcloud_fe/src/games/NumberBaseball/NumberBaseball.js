import React, { Component } from "react";
import Try from "./Try";
import "../../scss/NumberBaseball.scss";

function getNumbers() {
  //숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
    count: 0,
  };

  onSubmitForm = (e) => {
    const { result, value, tries, answer, count } = this.state;
    e.preventDefault();
    this.setState({ result: "" });
    if (value === answer.join("")) {
      //답이 맞는 지 비교
      this.setState((prevState) => {
        return {
          result: "홈런! 다음 게임을 진행하세요~",
          tries: [...prevState.tries, { try: value, result: "홈런!" }],
        };
      });
      alert("정답입니다!! 다음 게임을 진행하겠습니다~");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
        count: count + 10,
      });
    } else {
      // 답 틀렸으면
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때
        this.setState({
          result: `실패! 10번의 기회를 다 쓰셨습니다. 
        답은 ${answer.join(",")}였습니다!`,
        });
        alert("실패! 새로운 게임을 시작하겠습니다.");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [
              ...prevState.tries,
              { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` },
            ],
            value: "",
          };
        });
      }
    }
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { result, value, tries } = this.state;
    let remainingNum = 10 - tries.length;
    return (
      <React.Fragment>
        <h1 className="title_n">숫자야구</h1>
        <div className="rule">
          <h3>Rule</h3>
          <p>1. 랜덤한 숫자 네개가 설정되어 있습니다. 함께 맞춰볼까요?</p>
          <p>
            1. 네개의 숫자를 입력해주세요! (숫자 네개를 붙여서 써주세요 예.1234)
          </p>
          <p>2. 사용되는 숫자는 0에서 9까지로 서로 다른 숫자입니다(중복없음)</p>
          <p>
            3-1. 숫자와 위치가 전부 맞으면 스트라이크 !<br />
            3-2. 숫자는 맞지만 위치가 틀렸을 때는 볼 !<br />
            3-3. 숫자와 위치가 전부 틀리면 아웃!
          </p>
          <p>
            4. 10번의 기회가 주어집니다! <br />
            무엇이 볼이고 스트라이크라고는 알려주지 않으니 머리를 잘 써봅시다!
          </p>
        </div>

        <div className="title_value">
          <p>입력한 값</p>
          <div className="value_n">{this.state.value}</div>
        </div>

        <form onSubmit={this.onSubmitForm} className="input_n">
          <input c maxLength={4} value={value} onChange={this.onChangeInput} />
          <button>입력</button>
        </form>
        <div className="try">
          시도: {tries.length} (남은 횟수: {remainingNum})
        </div>
        <div className="try_num_position">
          {tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도: `} tryInfo={v} />;
          })}
        </div>

        <h1 className="result_n">{result}</h1>
        <p className="count">점수: {this.state.count}</p>
      </React.Fragment>
    );
  }
}

export default NumberBaseball;
