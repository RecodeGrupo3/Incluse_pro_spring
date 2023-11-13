package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Util.UserRegister;

@org.springframework.web.bind.annotation.RestController
public class RestController {

	@PostMapping("/register")
	public void register(@RequestBody UserRegister user) {
		System.out.print("\nUsername: " + user.getEmail() + "\nPassword: "+ user.getPassword());
	}
	
}
