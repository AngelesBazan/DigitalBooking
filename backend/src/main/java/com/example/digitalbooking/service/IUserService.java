package com.example.digitalbooking.service;

import com.example.digitalbooking.dto.UserDTO;

public interface IUserService extends ICRUDService<UserDTO>{
    void addRoleToUser(String username, String roleName);
    UserDTO createUserAtRuntime(UserDTO userDTO) throws Exception;
}
