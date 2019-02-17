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

import com.lti.entity.UserContactDetails;
import com.lti.service.UserContactService;

@RunWith(SpringRunner.class)
@SpringBootTest
@Rollback(false)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserContactDetailsTest {

	@Autowired
	private UserContactService userContactService;

	@Test
	@Transactional
	public void fetchAllUserContactDetails() {
		List<UserContactDetails> list = userContactService.fetchEach();
		for (UserContactDetails ucd : list) {
			System.out.println(ucd.getAddress());
			System.out.println(ucd.getEmailId());
		}
	}

	@Test
	@Transactional
	public void addUserContactDetails() {

		UserContactDetails ucd = new UserContactDetails();
		ucd.setAddress("Mumbai");
		ucd.setEmailId("abc@gmail.com");
		userContactService.add(ucd);

	}

}
