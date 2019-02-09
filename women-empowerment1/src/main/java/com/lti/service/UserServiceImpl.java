package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.repository.UserRepository;
import com.lti.repository.UserRepositoryImpl;
import com.lti.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public void add(User user) {
		userRepository.addUser(user);
	}

	public User fetch(int id) {
		return userRepository.fetchUser(id);
	}
}
