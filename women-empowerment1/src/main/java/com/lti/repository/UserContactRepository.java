package com.lti.repository;

import java.util.List;

import com.lti.entity.UserContactDetails;

public interface UserContactRepository {
	public void addUserContact(UserContactDetails ucd);

	public List<UserContactDetails> fetchAll();
}
