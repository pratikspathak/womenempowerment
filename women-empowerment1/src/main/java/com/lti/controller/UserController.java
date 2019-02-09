package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.User;
import com.lti.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(path="/user/add", method=RequestMethod.POST)
	public String add(@RequestBody User user) {
		userService.add(user);
		return "{\"status\" : \"User Record  Added Successfully!\"}";
	}

	@RequestMapping(path="/user/{id}", method=RequestMethod.GET)
	public User fetch(@PathVariable("id") int id) {
		return userService.fetch(id);
	}
}
