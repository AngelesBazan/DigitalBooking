package com.example.digitalbooking;

import com.example.digitalbooking.dto.RoleDTO;
import com.example.digitalbooking.dto.UserDTO;
import com.example.digitalbooking.model.Role;
import com.example.digitalbooking.model.User;
import com.example.digitalbooking.service.impl.RoleService;
import com.example.digitalbooking.service.impl.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.PropertyConfigurator;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
@RequiredArgsConstructor
public class DigitalBookingApplication {

	public static void main(String[] args) {
		PropertyConfigurator.configure("log4j.properties");
		SpringApplication.run(DigitalBookingApplication.class, args);
	}

}
