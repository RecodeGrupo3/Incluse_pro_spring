package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.emitter.Emitable;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.UserRegister;

@Service
public class ServiceRegisterAndLogin {

	@Autowired
	UserRepository userRepository;
	
	public String registerUser(UserRegister userRegister) {
		
		if(userRepository.getByEmail(userRegister.getEmail()) != null) {
			return "Email invalid";
		}

		User user = new User(); 
		
		user.setEmail(userRegister.getEmail());
		user.setPassword(userRegister.getPassword());
		
		userRepository.save(user);
		
		return "Email valid";
		
	}
	
	public String addInformation(User user) {
		
		User email = userRepository.getByEmail(user.getEmail());
		
		System.out.print("\n - " + email.getEmail());
		System.out.print("\n - " + user.getEmail());

		
		if(email != null) {
			user.setId(email.getId());
			userRepository.save(user);
			return "success";
		}
		
		return "failure";
	}
	
	public User getUser(String email) {
				
		User user = userRepository.getByEmail(email);

		return user;
	}
	
}
