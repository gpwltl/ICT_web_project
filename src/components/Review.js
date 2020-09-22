import React from 'react';

const Review = ({ isOpen, close }) => {
    return (
        <React.Fragment>
            {
                isOpen ?
                    <div align="center">
                        <p>hello, review</p>
                        <button onClick={close}>돌아가기</button> </div>

                    : null
            }
        </React.Fragment>
    )
}
export default Review;