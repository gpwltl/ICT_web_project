import React from 'react';
import './Modal.scss';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const Modal = ({ isOpen, close }) => {
    return (
        <React.Fragment>
            {
                isOpen ?
                    <React.Fragment>
                        <div className="Modal-overlay" onClick={close} />
                        <div className="Modal">
                            <p className="title">About GameCloud</p>
                            <div className="content">
                                <p>GameCloud는 <br />구구단, 끝말잇기, 숫자 야구 등 다양한
                웹 게임을 <br />접할 수 있는 서비스입니다. </p>

                                <p>원하는 게임을 이곳저곳 찾아보지 않고 한 페이지에서
                                모두 <br />경험할 수 있어 보다 편리하고 다양한 게임을 즐길 수 있습니다.
            </p>

                                <p>아이들의 교육용으로도, <br />어른들의 심심풀이로, <br />어르신분들의 치매 예방으로,<br />
                                GameCloud를 통해 남녀노소가 즐길 수 있기를 희망합니다 :)
            </p>

                            </div>
                            <div className="button-wrap">
                                <button onClick={close}>Confirm</button>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
}
export default Modal;