import React from 'react';

const About = ({ match }) => {
    return (
        <div>
            <h2>About {match.params.name}</h2>
            <p>GameCloud는 구구단, 끝말잇기, 숫자 야구 등 다양한
                웹 게임을 접할 수 있는 서비스입니다. </p>

            <p>원하는 게임을 이곳저곳 찾아보지 않고 한 페이지에서
            모두 경험할 수 있어 보다 편리하고 다양한 게임을 즐길 수 있습니다.
            </p>

            <p>아이들의 교육용으로도, 어른들의 심심풀이로, 어르신분들의 치매 예방으로,
            GameCloud를 통해 남녀노소가 즐길 수 있기를 희망합니다 :)
            </p>

        </div>
    );
};

export default About;