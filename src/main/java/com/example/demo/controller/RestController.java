package com.example.demo.controller;

import java.net.http.HttpHeaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.demo.models.Post;
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
	public ResponseEntity<String> register(@RequestBody UserRegister user) {
		System.out.print("\nUsername: " + user.getEmail() + "\nPassword: " + user.getPassword());
		
		serviceRegisterAndLogin.registerUser(user);
		
		return new ResponseEntity<>("Usuário cadastrado", null ,  HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public void login(@RequestBody UserLogin user) {

	}
	
}
