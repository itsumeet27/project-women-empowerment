package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.NGO;
import com.lti.entity.User;

@Repository
public class UserRepositoryImpl implements UserRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void addUser(User user) {
		entityManager.persist(user);
	}

	public User fetchUser(int id) {
		return entityManager.find(User.class, id);

	}

	public User fetchUser(User login) {
		Query query = entityManager.createQuery(
				"Select user from User as user where user.username=:username and user.password=:password ");
		query.setParameter("username", login.getUsername());
		query.setParameter("password", login.getPassword());
		return (User) query.getSingleResult();
	}

	@Transactional
	public List<User> fetchAll() {
		Query q = entityManager.createQuery("select obj from User as obj");
		return q.getResultList();
	}

}
