package com.example.digitalbooking.controller;

import com.example.digitalbooking.config.JWTUtils;
import com.example.digitalbooking.dto.UserDTO;
import com.example.digitalbooking.exceptions.ConflictException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.UnauthorizedException;
import com.example.digitalbooking.model.User;
import com.example.digitalbooking.model.jwt.JWTRequest;
import com.example.digitalbooking.model.jwt.JWTResponse;
import com.example.digitalbooking.repository.IUserRepository;
import com.example.digitalbooking.service.impl.JWTUserDetailsService;
import com.example.digitalbooking.service.impl.UserService;
import lombok.RequiredArgsConstructor;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@RestController
public class JWTAuthenticationController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final AuthenticationManager authenticationManager;
    private final JWTUserDetailsService jwtUserDetailsService;
    private final IUserRepository userRepository;
    private final UserService userService;
    private final JWTUtils jwtUtils;

    @Transactional
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JWTRequest authenticationRequest) throws UnauthorizedException {
        User user = userRepository.findByUsername(authenticationRequest.getUsername());
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()));
        }catch (Exception e) {
            throw new UnauthorizedException("Invalid credentials.");
        }
        final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JWTResponse((jwt)));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> createUser (@RequestBody UserDTO userDTO) throws ConflictException {
        userService.create(userDTO);

        final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(userDTO.getUsername());
        final String jwt = jwtUtils.generateToken(userDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body(new JWTResponse(jwt));
//        UserDTO userCreated = userService.create(userDTO);
//        return ResponseEntity.status(201).body(userCreated);
    }
}
