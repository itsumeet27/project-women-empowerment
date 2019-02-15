package com.lti.repository;

import java.util.List;

import com.lti.entity.UserCourse;

public interface UserCourseRepository {

	public void add(UserCourse uc);

	public List<UserCourse> fetchAll();

}
