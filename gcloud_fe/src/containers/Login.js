import React, { Component } from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
import "../scss/Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "kakao",
    };
  }

  responseKaKao = (res) => {
    this.setState({
      data: res,
    });
    alert(JSON.stringify(this.state.data));
  };

  responseFail = (err) => {
    alert(err);
  };
  render() {
    return (
      <div>
        <div className="login">
          <br />
          <h2>카카오톡 간편 로그인</h2>
          <h4>로그인 후 더 많은 혜택을 누리세요!</h4>
          <br />
        </div>
        <KaKaoBtn
          jsKey={""}
          buttonText="KaKao"
          onSuccess={this.responseKaKao}
          onFailure={this.responseFail}
          getProfile={true}
          className="button_kakao"
        />
      </div>
    );
  }
}
const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
export default Login;
