package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.NGO;
import com.lti.entity.TrainingCourse;
import com.lti.service.CourseService;

@RestController
@CrossOrigin
public class TrainingCourseController {

	@Autowired
	private CourseService courseService;

	@RequestMapping(path = "/course/add", method = RequestMethod.POST)
	public String add(@RequestBody TrainingCourse tc) {
		courseService.add(tc);
		return "{\"status\" : \"Course Details Added Successfully!\"}";
	}

	@RequestMapping(path = "/course/{id}", method = RequestMethod.GET)
	public TrainingCourse fetch(@PathVariable("id") int id) {
		return courseService.fetch(id);
	}

	@RequestMapping(path = "/course/fetch", method = RequestMethod.GET)
	public List<TrainingCourse> fetchAll() {
		List<TrainingCourse> list = courseService.fetchEach();
		return list;
	}

}
