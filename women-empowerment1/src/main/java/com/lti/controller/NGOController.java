package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.NGO;
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
		boolean flag = ngoService.verifyNgo(login);
		if (flag) {
			String flag1 = Boolean.toString(flag);
			return "{\"status\" : \"Loged   Successfully!\"}";
		} else {
			return "{\"status\" : \"Sorry Your Details are incorrect!\"}";
		}
	}

	@RequestMapping(path = "/ngo/fetch", method = RequestMethod.GET)
	public List<NGO> fetchAll() {
		List<NGO> list = ngoService.fetchEach();
		return list;
	}

}
