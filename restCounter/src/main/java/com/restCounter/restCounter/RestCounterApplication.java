package com.restCounter.restCounter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.restCounter.restCounter", "infrastructure.Services"})
@ComponentScan("controllers")
@CrossOrigin(origins = "*")

public class  RestCounterApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestCounterApplication.class, args);
	}

}
