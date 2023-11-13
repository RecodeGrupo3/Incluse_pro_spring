package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

	@PostMapping("/register")
	public void register() {
		System.out.print("\nRecebido");
	}
	
}
