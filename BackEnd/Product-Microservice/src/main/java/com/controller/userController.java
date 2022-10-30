package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Product;
import com.bean.User;
import com.repository.ProductRepository;
import com.repository.UserRepository;
import com.service.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin	
public class userController {
	
	@Autowired
	UserService userservice;
	@Autowired
	UserRepository userrepo;
	
	
	@GetMapping(value="welcomeUser")
	public String welcomemsge() {
		return "welcomr to user Microservice";
	}
	@PostMapping(value="Register",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String userRegister(@RequestBody User user) {
		return userservice.registerUser(user);
	}
	@GetMapping(value="users",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAllusers(){
		return userservice.getAllUsers();
	}
	@PutMapping(value = "updateUser")
	public String updateProduct(@RequestBody User user) {
		return userservice.updateUser(user);
	}
	@DeleteMapping(value = "deleteUser/{pid}")
	public String deleteProduct(@PathVariable("pid") int pid) {
		return userservice.deleteuser(pid);
	}
	@PutMapping(value="updateUserindb/{id}")
	public String updateUserindb(@PathVariable int id,@RequestBody User user)
	{
		return userservice.updateUserData(id,user);
	}
	@GetMapping(value="getUserById/{id}")
	public User getUser(@PathVariable("id") int id) {
		return  userrepo.ListUsersById(id);
	}
	
}
