package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.BookingDTO;
import com.example.digitalbooking.dto.UserDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ConflictException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Booking;
import com.example.digitalbooking.model.Role;
import com.example.digitalbooking.model.User;
import com.example.digitalbooking.repository.IRoleRepository;
import com.example.digitalbooking.repository.IUserRepository;
import com.example.digitalbooking.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService implements IUserService {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final IUserRepository userRepository;
    private final IRoleRepository roleRepository;
    private final ObjectMapper mapper;

    @Override
    public UserDTO findById(Long id) throws ResourceNotFoundException {
        User user = userRepository.findById(id).orElse(null);
        if(user == null) {
            throw new ResourceNotFoundException("There is no user with id=" + id + ".");
        }
        return mapper.convertValue(user, UserDTO.class);
    }

    @Override
    public UserDTO create(UserDTO userDTO) throws ConflictException {
        if(userRepository.findByUsername(userDTO.getUsername()) != null) {
            throw new ConflictException("That email address is already in use."); //chequear código de estado (ahora devuelve 500)
        }

        User user = mapper.convertValue(userDTO, User.class);
        String encodedPassword = this.bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        User userCreated = userRepository.save(user);

        if(userDTO.getRoles().size() == 0){
            addRoleToUser(userDTO.getUsername(), "USER");
        } else {
            userCreated.setRoles(getRoleList(userDTO));
        }
        return mapper.convertValue(userCreated, UserDTO.class);
    }

    private Collection<Role> getRoleList(UserDTO userDTO) {
        Collection<Role> roleIdList = userDTO.getRoles();
        Collection<Role> roleList = new ArrayList<>();
        for (Role r : roleIdList) {
            Role role = roleRepository.findById(r.getId()).get();
            roleList.add(role);
        }
        return roleList;
    }

    @Override
    public UserDTO createUserAtRuntime(UserDTO userDTO) throws ConflictException {
        if(userRepository.findByUsername(userDTO.getUsername()) != null) {
            throw new ConflictException("That email address is already in use."); //chequear código de estado (ahora devuelve 500)
        }
        User user = mapper.convertValue(userDTO, User.class);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return mapper.convertValue(userRepository.save(user), UserDTO.class);
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        User user = userRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no user with id=" + id + ".");
        }
        userRepository.delete(user);
    }

    @Override
    public UserDTO update(UserDTO userDTO) throws ResourceNotFoundException, BadRequestException {
        if(userDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(userDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no user with id=" + userDTO.getId() + ".");
        }

        User user = userRepository.save(mapper.convertValue(userDTO, User.class));
        return mapper.convertValue(user, UserDTO.class);
    }

    @Override
    public List<UserDTO> findAll() {
        List<User> userList = userRepository.findAll();

        List<UserDTO> userDTOList = userList.stream().map(user -> mapper.convertValue(user, UserDTO.class)).collect(Collectors.toList());
        return userDTOList;
    }

    public List<BookingDTO> getBookingsByUserId(Long id) throws ResourceNotFoundException {
        List<Booking> bookingList = userRepository.getBookingsByUserId(id);
        List<BookingDTO> bookingDTOList = new ArrayList<>();
        for (Booking b : bookingList){
            bookingDTOList.add(mapper.convertValue(b, BookingDTO.class));
        }
        return bookingDTOList;
    }

    public UserDTO findUserByEmail(String email) {
        User user = userRepository.findByUsername(email);
        return mapper.convertValue(user, UserDTO.class);
    }

    public String getEmailUserSession() {
        Authentication user = SecurityContextHolder.getContext().getAuthentication();
        return user.getName();
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        User user = userRepository.findByUsername(username);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }
}
