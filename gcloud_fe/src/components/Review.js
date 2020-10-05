import React from "react";
import ReviewList from "./review/ReviewList";
import AddReview from "./review/AddReview";
import EditReview from "./review/EditReview";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Review = ({ isOpen, close }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <div align="center">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ReviewList} />
              <Route path="/add-review" component={AddReview} />
              <Route path="/edit-review" component={EditReview} />
            </Switch>
          </BrowserRouter>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default Review;
