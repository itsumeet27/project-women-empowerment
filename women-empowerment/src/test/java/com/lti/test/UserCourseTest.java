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
import com.lti.entity.UserCourse;
import com.lti.service.UserContactService;
import com.lti.service.UserCourseService;

@RunWith(SpringRunner.class)
@SpringBootTest
@Rollback(false)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserCourseTest {

	@Autowired
	private UserCourseService userCourseService;

	@Test
	@Transactional
	public void fetchAllUserCourseDetails() {
		List<UserCourse> list = userCourseService.fetchEach();
		for (UserCourse uc : list) {
			System.out.println(uc.getCourse());
			System.out.println(uc.getName());
		}
	}

	@Test
	@Transactional
	public void addUserCourseDetails() {

		UserCourse uc = new UserCourse();
		uc.setCourse("agriculture");
		uc.setMobileNumber(7376879876.00);
		uc.setNgoName("WHO");
		uc.setName("Amit");
		userCourseService.addCourse(uc);

	}

}
