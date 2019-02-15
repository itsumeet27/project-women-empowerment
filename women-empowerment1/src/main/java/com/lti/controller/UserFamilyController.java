package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.UserFamilyDetails;
import com.lti.service.UserFamilyService;

@RestController
@CrossOrigin
public class UserFamilyController {

	@Autowired
	private UserFamilyService userFamilyService;

	@RequestMapping(path = "/userFamily/add", method = RequestMethod.POST)
	public String add(@RequestBody UserFamilyDetails ufd) {
		userFamilyService.add(ufd);
		return "{\"status\" : \"User Family  Record  Added Successfully!\"}";
	}

	@RequestMapping(path = "/userFamily/fetch", method = RequestMethod.GET)
	public List<UserFamilyDetails> fetchAll() {
		List<UserFamilyDetails> list = userFamilyService.fetchEach();
		return list;
	}
}
