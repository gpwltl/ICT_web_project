import React, { Component } from "react";
import ApiService from "../../ApiService";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      contents: "",
      message: null,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveReview = (e) => {
    e.preventDefault();
    let review = {
      title: this.state.title,
      contents: this.state.contents,
    };

    ApiService.addReview(review)
      .then((res) => {
        this.setState({
          message: review.title + ", 성공적으로 등록되었습니다.",
        });
        console.log(this.state.message);
        this.props.history.push("/reviews");
      })
      .catch((err) => {
        console.log("saveReview() Error!", err);
      });
  };

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Add Review
        </Typography>
        <form style={formContainer}>
          <TextField
            type="text"
            name="title"
            placeholder="insert title"
            fullWidth
            margin="normal"
            value={this.state.title}
            onChange={this.onChange}
          />
          <TextField
            type="text"
            name="contents"
            placeholder="insert contents"
            fullWidth
            margin="normal"
            value={this.state.contents}
            onChange={this.onChange}
          />

          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={this.saveReview}
          >
            Save
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

export default AddReview;
