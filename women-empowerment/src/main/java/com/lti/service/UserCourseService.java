package com.lti.service;

import java.util.List;

import com.lti.entity.UserCourse;

public interface UserCourseService {

	public void addCourse(UserCourse uc);

	public List<UserCourse> fetchEach();

}
