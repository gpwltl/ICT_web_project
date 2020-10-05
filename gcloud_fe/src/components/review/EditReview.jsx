import React, { Component } from "react";
import ApiService from "../../ApiService";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";

class EditReview extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);

    this.state = {
      id: "",
      title: "",
      contents: "",
      message: null,
    };
  }

  componentDidMount() {
    this.loadReview();
  }

  loadReview = () => {
    ApiService.fetchReviewsByID(window.localStorage.getItem("reviewID"))
      .then((res) => {
        let review = res.data;
        this.setState({
          id: review.id,
          title: review.title,
          contents: review.contents,
        });
      })
      .catch((err) => {
        console.log("loadReview() Error!", err);
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveReview = (e) => {
    e.preventDefault();
    let review = {
      id: this.state.id,
      title: this.state.title,
      contents: this.state.contents,
    };

    ApiService.editReview(review)
      .then((res) => {
        this.setState({
          message: review.title + ", 내용이 수정되었습니다.",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("saveReview() Error!", err);
      });
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <br />
        <Typography variant="h6" style={style}>
          Edit Review
        </Typography>
        <form style={formContainer}>
          <TextField
            type="text"
            name="title"
            placeholder="edit title"
            readOnly={true}
            fullWidth
            margin="normal"
            value={this.state.title}
          />

          <TextField
            type="text"
            name="contents"
            fullWidth
            margin="normal"
            placeholder="edit contents"
            value={this.state.contents}
            onChange={this.onChange}
          />

          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            onClick={this.saveReview}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={this.goBack}
          >
            Back
          </Button>
        </form>
      </div>
    );
  }
}

const formContainer = {
  display: "flex",
  flexFlow: "row wrap",
};
const style = {
  display: "flex",
  justifyContent: "center",
  color: "#0066cc",
};

export default EditReview;
