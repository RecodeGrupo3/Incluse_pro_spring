package com.example.demo.controller;

import java.net.http.HttpHeaders;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.demo.models.Post;
import com.example.demo.models.Skill;
import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.services.ServiceRegisterAndLogin;
import com.example.demo.util.UserLogin;
import com.example.demo.util.UserRegister;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@Autowired
	ServiceRegisterAndLogin serviceRegisterAndLogin;
	

	@PostMapping("/register")
	public ResponseEntity<UserRegister> register(@RequestBody UserRegister user) {
		System.out.print("\nUsername: " + user.getEmail() + "\nPassword: " + user.getPassword());
		
		var res = serviceRegisterAndLogin.registerUser(user); 
		
		if(res.equals("Email valid")) 
			return new ResponseEntity<>(user, null ,  HttpStatus.CREATED);
		
		else if (res.equals("Email invalid"))
			return new ResponseEntity<>(user, null ,  HttpStatus.CONFLICT);
		
		else 
			return new ResponseEntity<>(user, null ,  HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
	@PostMapping("/register/information")
	public ResponseEntity<String> information(@RequestBody User user){
		System.out.print("\n" + user.getEmail());
		System.out.print("\n" + user.getUsername());
		System.out.print("\n" + user.getPassword());
		System.out.print("\n" + user.getBirth());
		System.out.print("\n" + user.getStatus());
		System.out.print("\nCursos: ");
		user.getSkills().forEach(skill ->{
			skill.setUser(user);
			System.out.print("\n - " + skill.getCourse());
			System.out.print("\n - " + skill.getType());
			System.out.print("\n - " + skill.getStart());
			System.out.print("\n - " + skill.getEnd());
		});

		System.out.print("\ntrabalhos: ");
		user.getJobs().forEach(job ->{
			job.setUser(user);
			System.out.print("\n - " + job.getWork());
			System.out.print("\n - " + job.getType());
			System.out.print("\n - " + job.getStart());
			System.out.print("\n - " + job.getEnd());

		});
		
		return new ResponseEntity<>( serviceRegisterAndLogin.addInformation(user), null ,  HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/login")
	public void login(@RequestBody UserLogin user) {

	}
	
}
