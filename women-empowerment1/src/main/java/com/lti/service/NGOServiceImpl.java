package com.lti.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.repository.NGORepository;
import com.lti.entity.NGO;

@Service
public class NGOServiceImpl implements NGOService {

	@Autowired
	private NGORepository ngoRepo;

	private EntityManager entityManager;

	@Transactional
	public void add(NGO ngo) {
		ngoRepo.addNGO(ngo);
	}

	public NGO fetch(int id) {
		return ngoRepo.fetchNGO(id);
	}

	@Transactional
	public NGO verifyNgo(NGO login) {
		String username = login.getUsername();
		String password = login.getPassword();
		boolean flag = false;
		List<NGO> list = ngoRepo.fetchAll();
		for (NGO x : list) {
			if (username.equals(x.getUsername()) && password.equals(x.getPassword()))
				return x;
		}
		return null;
	}

	@Override
	public List<NGO> fetchEach() {
		return ngoRepo.fetchAll();

	}
}
