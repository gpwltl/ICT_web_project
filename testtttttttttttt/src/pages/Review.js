import React from 'react';

const Review = ({ match }) => {
    return (
        <div>
            <h2>Review {match.params.name}</h2>
        </div>
    );
};

export default Review;