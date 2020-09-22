import React from 'react';

const Review = ({ isOpen, close }) => {
    return (
        <React.Fragment>
            {
                isOpen ?
                    <>
                        <p>hello, review</p>
                        <button onClick={close}>돌아가기</button> </>

                    : null
            }
        </React.Fragment>
    )
}
export default Review;