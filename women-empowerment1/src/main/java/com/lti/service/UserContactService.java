package com.lti.service;

import java.util.List;

import com.lti.entity.UserContactDetails;

public interface UserContactService {
	public void add(UserContactDetails ucd);

	public List<UserContactDetails> fetchEach();

}
