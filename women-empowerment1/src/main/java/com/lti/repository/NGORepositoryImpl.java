package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.NGO;

@Repository
public class NGORepositoryImpl implements NGORepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void addNGO(NGO ngo) {
		entityManager.persist(ngo);
	}

	public NGO fetchNGO(int id) {
		return entityManager.find(NGO.class, id);
	}

	@Transactional
	public List<NGO> fetchAll() {
		Query q = entityManager.createQuery("select obj from NGO as obj");
		return q.getResultList();
	}
}
