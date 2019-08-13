package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.lang.Double;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.NGO;
import com.lti.entity.ResponseDTO;
import com.lti.entity.User;
import com.lti.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(path = "/user/add", method = RequestMethod.POST)
	public String add(@RequestBody User user) {
		userService.add(user);
		return "{\"status\" : \"User Record  Added Successfully!\"}";
	}

	@RequestMapping(path = "/user/{id}", method = RequestMethod.GET)
	public User fetch(@PathVariable("id") int id) {
		return userService.fetch(id);
	}

	@CrossOrigin
	@RequestMapping(path = "/userlogin/verifyuser", method = RequestMethod.POST)
	public String verifyUser(@RequestBody User login) {
		User user = userService.verifyUser(login);
		if (user != null) {
			return "{\"status\" : \"" + user.getName() + " you are logged in  Successfully!\"}";
		} else {
			return "{\"status\" : \"Sorry Your Details are incorrect!\"}";
		}
	}

	@CrossOrigin
	@RequestMapping(path = "/userVerify/verify", method = RequestMethod.POST)
	public ResponseDTO verify(@RequestBody User login) {
		ResponseDTO responseDTO = userService.confirmLogin(login);
		return responseDTO;
	}

	@RequestMapping(path = "/user/fetch", method = RequestMethod.GET)
	public List<User> fetchAll() {
		List<User> list = userService.fetchEach();
		return list;
	}
}
