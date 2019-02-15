package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.repository.UserRepository;
import com.lti.repository.UserRepositoryImpl;
import com.lti.entity.NGO;
import com.lti.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public void add(User user) {
		userRepository.addUser(user);
	}

	public User fetch(int id) {
		return userRepository.fetchUser(id);
	}

	@Transactional
	public User verifyUser(User login) {
		String username = login.getUsername();
		String password = login.getPassword();
		boolean flag = false;
		List<User> list = userRepository.fetchAll();
		for (User x : list) {
			if (username.equals(x.getUsername()) && password.equals(x.getPassword()))
				return x;
		}
		return null;
	}

	@Override
	public List<User> fetchEach() {
		return userRepository.fetchAll();

	}
}
