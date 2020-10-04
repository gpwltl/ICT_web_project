import axios from "axios";

const REVIEW_API_URL = "http://localhost:8080/reviews";

class ApiService {
  fetchReviews() {
    return axios.get(REVIEW_API_URL);
  }

  fetchReviewsByID(reviewID) {
    return axios.get(REVIEW_API_URL + "/" + reviewID);
  }

  deleteReview(reviewID) {
    return axios.delete(REVIEW_API_URL + "/" + reviewID);
  }

  addReview(review) {
    return axios.post(REVIEW_API_URL, review);
  }

  editReview(review) {
    return axios.put(REVIEW_API_URL + "/" + review.id, review);
  }
}

export default new ApiService();
