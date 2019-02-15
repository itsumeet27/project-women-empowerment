package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.UserContactDetails;
import com.lti.repository.UserContactRepository;

@Service
public class UserContactServiceImpl implements UserContactService {

	@Autowired
	private UserContactRepository userContactRepository;

	@Transactional
	public void add(UserContactDetails ucd) {
		userContactRepository.addUserContact(ucd);
	}

	public List<UserContactDetails> fetchEach() {
		return userContactRepository.fetchAll();

	}

}
