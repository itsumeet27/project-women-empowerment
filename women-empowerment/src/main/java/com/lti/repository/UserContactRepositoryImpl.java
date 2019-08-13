package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.UserContactDetails;

@Repository
public class UserContactRepositoryImpl implements UserContactRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void addUserContact(UserContactDetails ucd) {
		entityManager.persist(ucd);
	}

	@Transactional
	public List<UserContactDetails> fetchAll() {
		Query q = entityManager.createQuery("select obj from UserContactDetails as obj");
		return q.getResultList();
	}

}
