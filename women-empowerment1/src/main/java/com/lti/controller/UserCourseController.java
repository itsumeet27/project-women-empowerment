package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.NGO;
import com.lti.entity.User;
import com.lti.entity.UserCourse;
import com.lti.service.NGOService;
import com.lti.service.UserCourseService;
import com.lti.service.UserService;

@RestController
@CrossOrigin
public class UserCourseController {

	@Autowired
	private UserCourseService userCourseService;
	@Autowired
	private UserService userService;

	@Autowired
	private NGOService ngoService;

	// Validation Logic for Extracting the proper user
	// details from the respective tables
	/*
	 * @RequestMapping(path = "/userCourse/add", method = RequestMethod.POST) public
	 * String add(@RequestBody UserCourse uc) {
	 * 
	 * // Validation Logic Double mobileNumber = uc.getMobileNumber(); String name =
	 * uc.getUname(); String ngoName = uc.getNgoName(); List<User> list =
	 * userService.fetchEach(); List<NGO> list1 = ngoService.fetchEach(); boolean
	 * flag = false; boolean flag1 = false;
	 * 
	 * for (NGO ngo : list1) { if (ngoName == ngo.getName()) flag = true;
	 * System.out.println(flag); } for (User us : list) { if (name == us.getName()
	 * && mobileNumber == uc.getMobileNumber()) flag1 = true;
	 * System.out.println(flag1); }
	 * 
	 * if (flag) { if (flag1) userCourseService.addCourse(uc); return
	 * "{\"status\" : \"User Course  Details  Added Successfully!\"}"; } else {
	 * return "{\"status\" : \"Dear Madam Please provide valid Details !\"}"; } }
	 */

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
