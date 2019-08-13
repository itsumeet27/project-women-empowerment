package com.lti.service;

import java.util.List;

import com.lti.entity.DocumentSection;

public interface DocumentSectionService {

	public void add(DocumentSection ds);

	public List<DocumentSection> fetchEach();

}
