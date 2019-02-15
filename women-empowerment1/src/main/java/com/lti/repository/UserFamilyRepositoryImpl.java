package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.User;
import com.lti.entity.UserFamilyDetails;

@Repository
public class UserFamilyRepositoryImpl implements UserFamilyRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void addUserFamilyDetails(UserFamilyDetails ufd) {
		entityManager.persist(ufd);
	}

	@Transactional
	public List<UserFamilyDetails> fetchAll() {
		Query q = entityManager.createQuery("select obj from UserFamilyDetails as obj");
		return q.getResultList();
	}

}
