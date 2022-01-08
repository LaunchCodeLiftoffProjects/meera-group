package com.example.beatsPM;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class BeatsPmApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeatsPmApplication.class, args);
	}

}
