package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.UserCourse;
import com.lti.service.UserCourseService;

@RestController
@CrossOrigin
public class UserCourseController {

	@Autowired
	private UserCourseService userCourseService;

	@RequestMapping(path = "/userCourse/add", method = RequestMethod.POST)
	public String add(@RequestBody UserCourse uc) {
		userCourseService.addCourse(uc);
		return "{\"status\" : \"User Course  Details  Added Successfully!\"}";
	}

	@RequestMapping(path = "/userCourse/fetch", method = RequestMethod.GET)
	public List<UserCourse> fetchAll() {
		List<UserCourse> list = userCourseService.fetchEach();
		return list;
	}
}
