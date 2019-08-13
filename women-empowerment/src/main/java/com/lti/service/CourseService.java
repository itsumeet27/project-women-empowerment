package com.lti.service;

import java.util.List;

import com.lti.entity.TrainingCourse;

public interface CourseService {

	public void add(TrainingCourse tc);

	public TrainingCourse fetch(int id);

	public List<TrainingCourse> fetchEach();

}
