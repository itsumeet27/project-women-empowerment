package com.lti.repository;

import java.util.List;
import com.lti.entity.UserFamilyDetails;

public interface UserFamilyRepository {

	public void addUserFamilyDetails(UserFamilyDetails user);

	public List<UserFamilyDetails> fetchAll();

}
