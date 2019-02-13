package com.lti.repository;

import java.util.List;

import com.lti.entity.NGO;

public interface NGORepository {

	public void addNGO(NGO ngo);

	public NGO fetchNGO(int id);

	public List<NGO> fetchAll();

}
