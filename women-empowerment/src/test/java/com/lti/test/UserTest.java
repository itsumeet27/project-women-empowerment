package com.lti.test;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.User;
import com.lti.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@Rollback(false)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserTest {

	@Autowired
	private UserService userService;

	@Test
	@Transactional
	public void fetchAllUsers() {
		List<User> list = userService.fetchEach();
		for (User us : list) {
			System.out.println(us.getName());
		}
	}

	@Test
	@Transactional
	public void addUsers() {

		User u = new User();
		u.setName("sas");
		u.setUsername("sas");
		u.setPassword("pspp");
		u.setConfirmPassword("pspp");
		u.setMobileNumber(7654744353.0);
		u.setBirthDate("13-04-1884");
		u.setDesignation("Manager");
		u.setSalary(400000.00);
		userService.add(u);

	}
}
