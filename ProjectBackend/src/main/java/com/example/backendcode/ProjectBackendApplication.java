package com.example.backendcode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
//@EnableJpaRepositories(basePackages = "com.example.backendcode.Repository.*")
//@ComponentScan(basePackages = {"com.example.backendcode.Repository"})
public class ProjectBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectBackendApplication.class, args);
	}

}
