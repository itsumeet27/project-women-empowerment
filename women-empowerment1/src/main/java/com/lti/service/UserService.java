package com.lti.service;

import java.util.List;

import com.lti.entity.NGO;
import com.lti.entity.ResponseDTO;
import com.lti.entity.User;

public interface UserService {

	public void add(User user);

	public User fetch(int id);

	public User verifyUser(User login);

	public ResponseDTO confirmLogin(User login);

	public List<User> fetchEach();

}
