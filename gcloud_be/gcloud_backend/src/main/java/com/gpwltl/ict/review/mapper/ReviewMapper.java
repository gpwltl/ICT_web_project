package com.gpwltl.ict.review.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.gpwltl.ict.review.vo.ReviewVO;

@Mapper
public interface ReviewMapper {
	List<ReviewVO> reviewList();
	ReviewVO fetchReviewsByID(int id);
	void updateReview(ReviewVO review);
	void insertReview(ReviewVO review);
	void deleteReview(int id);
}
