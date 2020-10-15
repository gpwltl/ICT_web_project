import React, {
  Component,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Ball from "./Ball";
import "../../../scss/Lotto.scss";

function getWinNumbers() {
  const candidate = Array(45)
    .fill()
    .map((_, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  let result = [...winNumbers, bonusNumber];
  console.log("getWinNumbers: ", result);
  return result;
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log("useEffect");
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      console.log("componentWillUnmount");
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // componentDidMount와 componentDidUpdate 둘다 실행

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
  }, [redo]);

  useEffect(() => {
    console.log("로또 숫자를 생성합니다.");
  }, [winNumbers]);

  const onClickRedo = useCallback(() => {
    console.log("onClickRedo: ", winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);

    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <h1 className="title_l">로또 추첨기</h1>
      <div className="rule">
        <h3>Rule</h3>
        <p>1. 친구를 불러모아요~ </p>
        <p>2. 각자 6개의 숫자를 적어보아요! (1~45 중)</p>
        <p>3. 시작버튼을 눌러 여섯개의 숫자를 확인하세요! </p>
        <p>4. 누가누가 더 많이 맞췄나요~~ 6개 모두 맞춘사람 있나요~!? </p>
      </div>

      <div className="choice_num_title">당첨 숫자</div>
      <div className="choice_num">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div className="bonus_title">보너스 볼!</div>
      <div className="bonus_ball">{bonus && <Ball number={bonus} />}</div>
      <div className="button_onemore">
        {redo && <button onClick={onClickRedo}>한 번 더!</button>}
      </div>
    </>
  );
};
export default Lotto;
