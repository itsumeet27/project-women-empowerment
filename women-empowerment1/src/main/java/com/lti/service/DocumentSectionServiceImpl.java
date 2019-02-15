package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.DocumentSection;
import com.lti.repository.DocumentSectionRepository;

@Service
public class DocumentSectionServiceImpl implements DocumentSectionService {

	@Autowired
	private DocumentSectionRepository documentSectionRepository;

	@Transactional
	public void add(DocumentSection ds) {
		documentSectionRepository.addDocumentSection(ds);
	}

	@Transactional
	public List<DocumentSection> fetchEach() {
		return documentSectionRepository.fetchAll();

	}
}
