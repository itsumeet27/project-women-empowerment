package com.lti.repository;

import java.util.List;

import com.lti.entity.NGO;
import com.lti.entity.User;

public interface UserRepository {

	public void addUser(User user);

	public User fetchUser(int id);

	public List<User> fetchAll();

}
