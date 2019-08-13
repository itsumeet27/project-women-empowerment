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

import com.lti.entity.NGO;
import com.lti.entity.User;
import com.lti.entity.UserFamilyDetails;
import com.lti.repository.UserRepository;
import com.lti.service.NGOService;
import com.lti.service.UserFamilyService;
import com.lti.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@Rollback(false)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserFamilyDetailsTest {

	@Autowired
	private UserFamilyService userFamilyService;

	@Test
	@Transactional
	public void fetchAllUserFamilyDetails() {
		List<UserFamilyDetails> list = userFamilyService.fetchEach();
		for (UserFamilyDetails us : list) {
			System.out.println(us.getAnnualIncome());
			System.out.println(us.getNoOfChildren());
			System.out.println(us.getNoOfMembers());
		}
	}

	@Test
	@Transactional
	public void addUserFamilyDetails() {

		UserFamilyDetails ufd = new UserFamilyDetails();
		ufd.setNoOfMembers(2);
		ufd.setNoOfChildren(2);
		ufd.setCriteria("Boy Child's age less then or equal to 5 years");
		ufd.setAnnualIncome(4000);
		userFamilyService.add(ufd);

	}

}
