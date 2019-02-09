package com.lti.service;

import com.lti.entity.User;

public interface UserService {

	public void add(User user);

	public User fetch(int id);

}
