package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PageController {
	
	@GetMapping("/")
	public ModelAndView hello() {
		return new ModelAndView("PAGES/feed.html");
	}

	@GetMapping("/perfil")
	public ModelAndView perfil() {
		return new ModelAndView("PAGES/perfil.html");
	}
	
	@GetMapping("/register")
	public ModelAndView register() {
		return new ModelAndView("PAGES/register.html");
	}
	
}
