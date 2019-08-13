package com.lti.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.repository.NGORepository;
import com.lti.entity.NGO;
import com.lti.entity.ResponseDTO;
import com.lti.entity.ResponseType;
import com.lti.entity.User;

@Service
public class NGOServiceImpl implements NGOService {

	@Autowired
	private NGORepository ngoRepo;

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

	@Transactional
	public ResponseDTO confirmLogin(NGO ngo) {
		ResponseDTO responseDTO = new ResponseDTO();

		try {
			List<NGO> usr = ngoRepo.fetchAll();
			for (NGO u : usr) {
				if (u.getUsername().equals(ngo.getUsername()) && u.getPassword().equals(ngo.getPassword())) {
					responseDTO.setResponseType(ResponseType.VERIFIED);
					responseDTO.setUsername(u.getUsername());
					return responseDTO;
				}
			}
			responseDTO.setResponseType(ResponseType.NOTVERIFIED);
			return responseDTO;
		} catch (Exception e) {
			e.printStackTrace();
			responseDTO.setResponseType(ResponseType.ERROR);
			return responseDTO;
		}
	}

	@Override
	public List<NGO> fetchEach() {
		return ngoRepo.fetchAll();

	}
}
