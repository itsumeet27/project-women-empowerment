package com.lti.repository;

import java.util.List;

import com.lti.entity.TrainingCourse;

public interface CourseRepository {

	public void addCourse(TrainingCourse tc);

	public TrainingCourse fetchCourse(int id);

	public List<TrainingCourse> fetchAll();
}
