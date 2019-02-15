package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.DocumentSection;

@Repository
public class DocumentSectionRepositoryImpl implements DocumentSectionRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void addDocumentSection(DocumentSection ds) {
		entityManager.persist(ds);
	}

	@Transactional
	public List<DocumentSection> fetchAll() {
		Query q = entityManager.createQuery("select obj from DocumentSection as obj");
		return q.getResultList();
	}

}
