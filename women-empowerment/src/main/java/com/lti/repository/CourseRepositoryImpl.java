package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.TrainingCourse;

@Repository
public class CourseRepositoryImpl implements CourseRepository {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public void addCourse(TrainingCourse tc) {
		entityManager.persist(tc);

	}

	@Override
	public TrainingCourse fetchCourse(int id) {
		return entityManager.find(TrainingCourse.class, id);

	}

	@Transactional
	public List<TrainingCourse> fetchAll() {
		Query q = entityManager.createQuery("select obj from TrainingCourse as obj");
		return q.getResultList();

	}

}
