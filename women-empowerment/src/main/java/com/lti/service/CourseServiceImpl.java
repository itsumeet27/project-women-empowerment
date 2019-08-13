package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.lti.entity.TrainingCourse;
import com.lti.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepository;

	@Transactional
	public void add(TrainingCourse tc) {
		courseRepository.addCourse(tc);
	}

	@Transactional
	public TrainingCourse fetch(int id) {
		return courseRepository.fetchCourse(id);
	}

	@Transactional
	public List<TrainingCourse> fetchEach() {
		return courseRepository.fetchAll();

	}

}
