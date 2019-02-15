package com.lti.repository;

import java.util.List;

import com.lti.entity.DocumentSection;

public interface DocumentSectionRepository {

	public void addDocumentSection(DocumentSection ds);

	public List<DocumentSection> fetchAll();
}
