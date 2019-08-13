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
import com.lti.repository.UserRepository;
import com.lti.service.NGOService;
import com.lti.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@Rollback(false)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class NGOTest {
	@Autowired
	private NGOService ngoService;

	@Test
	@Transactional
	public void fetchAllNGO() {
		List<NGO> list = ngoService.fetchEach();
		for (NGO us : list) {
			System.out.println(us.getName());
		}
	}

	@Test
	@Transactional
	public void addNGO() {

		NGO ngo = new NGO();
		ngo.setName("sas");
		ngo.setUsername("sas");
		ngo.setPassword("pspp");
		ngo.setConfirmPassword("pspp");
		ngo.setAddress("Worli,Mumbai");
		ngo.setOrganizationType("Non-Profit");
		ngo.setContactNo(9663322558.0);
		ngo.setProjectInCharge("Mr.Robert");
		ngoService.add(ngo);

	}

}
