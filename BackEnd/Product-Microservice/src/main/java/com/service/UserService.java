package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.UserDao;
import com.repository.UserRepository;
import com.bean.Product;
import com.bean.User;

@Service
public class UserService {
	
	@Autowired
	UserRepository userrepository;
	
	@Autowired
	UserDao userdao;
	

	public String registerUser(User user) {
		if(userdao.registerUser(user)) {
			return "user registered successfully";
		}else {
			return "registration unsuccessful";
		}
	}
	public List<User> getAllUsers(){
		return userrepository.findAll();
	}
	public String deleteuser(int pid) {
		Optional<User> op =  userrepository.findById(pid);
			if(op.isPresent()) {
					User p = op.get();
					userrepository.delete(p);
					return "User deleted successfully";
			}else {
				return "User not present";
			}
		}
	public String updateUser(User user) {
		if(userdao.updateUser(user)) {
			return "Record updated successfully";
		}else {
			return "Record not present";
		}
	}
	public String updateUserData(int id, User user) {
			// TODO Auto-generated method stub
			User toUpdate= userrepository.getById(id);
			toUpdate.setId(id);
			toUpdate.setAddress(user.getAddress());
			toUpdate.setEmail(user.getEmail());
			toUpdate.setPassword(user.getPassword());
			toUpdate.setPhone(user.getPhone());
			toUpdate.setRole(user.getRole());
			toUpdate.setUsername(user.getUsername());
			userrepository.save(toUpdate);
			return "Updated";
		}
	public User ListUsersById(int id) {
		// TODO Auto-generated method stub
		return userrepository.getById(id) ;
	}
	
	
	
	

}
