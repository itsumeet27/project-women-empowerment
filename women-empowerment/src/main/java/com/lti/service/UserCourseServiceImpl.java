package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.UserContactDetails;
import com.lti.entity.UserCourse;
import com.lti.repository.UserContactRepository;
import com.lti.repository.UserCourseRepository;

@Service
public class UserCourseServiceImpl implements UserCourseService {

	@Autowired
	private UserCourseRepository userCourseRepository;

	@Transactional
	public void addCourse(UserCourse ucd) {
		userCourseRepository.add(ucd);
	}

	public List<UserCourse> fetchEach() {
		return userCourseRepository.fetchAll();

	}

}
