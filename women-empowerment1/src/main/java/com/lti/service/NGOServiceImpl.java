package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.repository.NGORepository;
import com.lti.entity.NGO;


@Service
public class NGOServiceImpl implements NGOService {

	@Autowired
	private NGORepository ngoRepo;

	@Transactional
	public void add(NGO ngo) {
		ngoRepo.addNGO(ngo);
	}

	public NGO fetch(int id) {
		return ngoRepo.fetchNGO(id);
	}
}
