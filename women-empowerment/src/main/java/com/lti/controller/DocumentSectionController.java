package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.DocumentSection;
import com.lti.service.DocumentSectionService;

@RestController
@CrossOrigin
public class DocumentSectionController {

	@Autowired
	private DocumentSectionService documentSectionService;

	@RequestMapping(path = "/document/add", method = RequestMethod.POST)
	public String add(@RequestBody DocumentSection ds) {
		documentSectionService.add(ds);
		return "{\"status\" : \"Document Section Record Added Successfully!\"}";
	}

	@RequestMapping(path = "/document/fetch", method = RequestMethod.GET)
	public List<DocumentSection> fetchAll() {
		List<DocumentSection> list = documentSectionService.fetchEach();
		return list;
	}

}
