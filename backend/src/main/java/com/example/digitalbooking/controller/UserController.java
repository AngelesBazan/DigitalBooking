package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.BookingDTO;
import com.example.digitalbooking.dto.UserDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ConflictException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.UserService;

import lombok.RequiredArgsConstructor;

import org.apache.log4j.Logger;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findUserById(@PathVariable Long id) throws ResourceNotFoundException {
        UserDTO userDTO = userService.findById(id);
        logger.info("User successfully returned: " + userDTO);
        return ResponseEntity.ok(userDTO);
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) throws ConflictException {
        UserDTO userCreated = userService.create(userDTO);
        logger.info("User successfully saved: " + userCreated);
        return ResponseEntity.status(201).body(userCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUserById(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        userService.deleteById(id);
        logger.info("User with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("User deleted");
    }

    @PutMapping
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO) throws ResourceNotFoundException, BadRequestException {
        UserDTO userUpdated = userService.update(userDTO);
        logger.info("User successfully updated: " + userDTO);
        return ResponseEntity.ok(userUpdated);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> findAllUsers() {
        List<UserDTO> users = userService.findAll();
        logger.info(users.size() + (users.size() == 1 ? " user" : " users")  + " successfully returned.");
        return ResponseEntity.ok(users);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<UserDTO> getUserByUsername(@PathVariable String email) {
        UserDTO userDTO = userService.findUserByEmail(email);
        logger.info("User successfully updated: " + userDTO);
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping("/{id}/bookings")
    public ResponseEntity<List<BookingDTO>> getBookingsByUserId(@PathVariable Long id) throws ResourceNotFoundException {
        List<BookingDTO> bookingDTOList = userService.getBookingsByUserId(id);
        logger.info(bookingDTOList.size() + (bookingDTOList.size() == 1 ? " booking" : " bookings")  + " successfully returned.");
        return ResponseEntity.ok(bookingDTOList);
    }
}