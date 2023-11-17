package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.UserRegister;

@Service
public class ServiceRegisterAndLogin {

	@Autowired
	UserRepository userRepository;
	
	public void registerUser(UserRegister userRegister) {
				
		User user = new User(); 
		
		user.setEmail(userRegister.getEmail());
		user.setPassword(userRegister.getPassword());
		
		userRepository.save(user);
		
	}
	
}
