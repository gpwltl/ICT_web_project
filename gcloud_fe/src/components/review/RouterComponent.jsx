import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddReview from "./AddReview";
import ReviewList from "./ReviewList";
import EditReview from "./EditReview";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={style}>
          <Switch>
            <Route exact path="/" component={ReviewList} />
            <Route path="/reviews" component={ReviewList} />
            <Route path="/add-review" component={AddReview} />
            <Route path="/edit-review" component={EditReview} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const style = {
  color: "red",
  margin: "10px",
};

export default RouterComponent;
