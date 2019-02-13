package com.lti.service;

import java.util.List;

import com.lti.entity.NGO;

public interface NGOService {

	public void add(NGO ngo);

	public NGO fetch(int id);

	public boolean verifyNgo(NGO login);

	public List<NGO> fetchEach();

}
