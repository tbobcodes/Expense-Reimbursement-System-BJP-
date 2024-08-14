package com.revature.P1Demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.revature.models") //This tells Spring Boot to look in the model package for DB entities
@ComponentScan("com.revature") //This tells Spring Boot to look for beans in the entire com.rev package
@EnableJpaRepositories("com.revature.DAOs") //This allows us to use JpaRepository in our DAOs
public class P1DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(P1DemoApplication.class, args);
	}

}
