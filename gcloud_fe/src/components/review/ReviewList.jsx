import React, { Component } from "react";
import ApiService from "../../ApiService";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      message: null,
    };
  }

  componentDidMount() {
    this.reloadReviewList();
  }

  reloadReviewList = () => {
    ApiService.fetchReviews()
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log("reload() Error!", err);
      });
  };

  deleteReview = (reviewID) => {
    ApiService.deleteReview(reviewID)
      .then((res) => {
        this.setState({
          message: "Deleted Successfully.",
        });
        this.setState({
          reviews: this.state.reviews.filter(
            (review) => review.id !== reviewID
          ),
        });
      })
      .catch((err) => {
        console.log("deleteReview() Error!", err);
      });
  };

  editReview = (ID) => {
    window.localStorage.setItem("reviewID", ID);
    this.props.history.push("/edit-review");
  };

  addReview = () => {
    window.localStorage.removeItem("reviewID");
    this.props.history.push("/add-review");
  };

  render() {
    return (
      <div>
        <br />
        <Typography variant="h6" style={style}>
          Review List
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={this.addReview}
        >
          Add Review
        </Button>
        <br />
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>TITLE</TableCell>
              <TableCell>Contents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell align="left">{review.title}</TableCell>
                <TableCell align="left">{review.contents}</TableCell>
                <TableCell
                  align="left"
                  onClick={() => this.editReview(review.id)}
                >
                  <CreateIcon />
                </TableCell>
                <TableCell
                  align="left"
                  onClick={() => this.deleteReview(review.id)}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const style = {
  display: "flex",
  justifyContent: "center",
  color: "#0066cc",
};

export default ReviewList;
