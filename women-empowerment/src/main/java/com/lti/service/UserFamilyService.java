package com.lti.service;

import java.util.List;

import com.lti.entity.TrainingCourse;
import com.lti.entity.UserFamilyDetails;

public interface UserFamilyService {

	public void add(UserFamilyDetails ufd);

	public List<UserFamilyDetails> fetchEach();

}
