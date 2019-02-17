package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Status;
import com.lti.entity.User;
import com.lti.entity.NGO;
import com.lti.entity.ResponseDTO;
import com.lti.service.NGOService;

@RestController
@CrossOrigin
public class NGOController {

	@Autowired
	private NGOService ngoService;

	@RequestMapping(path = "/ngo/add", method = RequestMethod.POST)
	public String add(@RequestBody NGO ngo) {
		ngoService.add(ngo);
		return "{\"status\" : \"NGO Record Added Successfully!\"}";
	}

	@RequestMapping(path = "/ngo/{id}", method = RequestMethod.GET)
	public NGO fetch(@PathVariable("id") int id) {
		return ngoService.fetch(id);
	}

	@CrossOrigin
	@RequestMapping(path = "/ngologin/verifyngo", method = RequestMethod.POST)
	public String verifyNgo(@RequestBody NGO login) {
		NGO ngo = ngoService.verifyNgo(login);
		if (ngo != null) {
			return "{\"status\" : \"" + ngo.getName() + " you are logged in  Successfully!\"}";
		} else {
			return "{\"status\" : \"Sorry Your Details are incorrect!\"}";
		}
	}

	@CrossOrigin
	@RequestMapping(path = "/ngoVerify/verify", method = RequestMethod.POST)
	public ResponseDTO verify(@RequestBody NGO ngo) {

		ResponseDTO responseDTO = ngoService.confirmLogin(ngo);
		return responseDTO;

	}

	@RequestMapping(path = "/ngo/fetch", method = RequestMethod.GET)
	public List<NGO> fetchAll() {
		List<NGO> list = ngoService.fetchEach();
		return list;
	}

}
