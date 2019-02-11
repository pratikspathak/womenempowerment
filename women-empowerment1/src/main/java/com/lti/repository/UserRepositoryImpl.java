package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

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

}
