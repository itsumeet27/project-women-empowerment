package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.UserCourse;

@Repository
public class UserCourseRepositoryImpl implements UserCourseRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void add(UserCourse uc) {
		entityManager.persist(uc);
	}

	@Transactional
	public List<UserCourse> fetchAll() {
		Query q = entityManager.createQuery("select obj from UserCourse as obj");
		return q.getResultList();
	}
}
