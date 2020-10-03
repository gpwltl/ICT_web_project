package com.gpwltl.ict.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gpwltl.ict.mapper.ReviewMapper;
import com.gpwltl.ict.vo.ReviewVO;

@CrossOrigin(origins="*", maxAge=3600)
@RestController
@RequestMapping("/reviews")
public class ReviewController {
	@Autowired
	ReviewMapper reviewMapper;
	
	@GetMapping
	public List<ReviewVO> reviewList(){
		System.out.println(reviewMapper.reviewList());
		System.out.println("리뷰 list 출력 success");
		return reviewMapper.reviewList();
	}
	
	@PostMapping
	void insertReview(@RequestBody ReviewVO review) {
		reviewMapper.insertReview(review);
		System.out.println("리뷰 DB 저장 success");
	}
	
	@GetMapping("/{id}")
	public ReviewVO fetchReviewByID(@PathVariable int id) {
		System.out.println(reviewMapper.fetchReviewsByID(id));
		ReviewVO fetchReview=reviewMapper.fetchReviewsByID(id);
		return fetchReview;
	}
	
	@PutMapping("/{id}")
	public void updateReview(@PathVariable int id, @RequestBody ReviewVO review) {
		ReviewVO updateReview=review;
		System.out.println("리뷰 업데이트 success => "+updateReview);
		
		updateReview.setTitle(review.getTitle());
		updateReview.setContents(review.getContents());
		
		reviewMapper.updateReview(updateReview);
		
	}
	
	@DeleteMapping("/{id}")
	public void deleteReview(@PathVariable int id) {
		reviewMapper.deleteReview(id);
		System.out.println("리뷰 삭제 success");
	}
}
