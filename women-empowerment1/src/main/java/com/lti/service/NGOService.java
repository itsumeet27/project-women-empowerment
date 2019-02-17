package com.lti.service;

import java.util.List;

import com.lti.entity.NGO;
import com.lti.entity.ResponseDTO;
import com.lti.entity.User;

public interface NGOService {

	public void add(NGO ngo);

	public NGO fetch(int id);

	public NGO verifyNgo(NGO login);

	public ResponseDTO confirmLogin(NGO ngo);

	public List<NGO> fetchEach();

}
