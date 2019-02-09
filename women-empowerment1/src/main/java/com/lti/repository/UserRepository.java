package com.lti.repository;

import com.lti.entity.User;

public interface UserRepository {
	
	public void addUser(User user);
	public User fetchUser(int id);

}
