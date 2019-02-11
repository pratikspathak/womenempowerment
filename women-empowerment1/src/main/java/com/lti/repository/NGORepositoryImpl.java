package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

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
}
