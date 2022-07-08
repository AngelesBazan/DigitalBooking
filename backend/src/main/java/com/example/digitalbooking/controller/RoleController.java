package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.RoleDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.RoleService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/roles")
public class RoleController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final RoleService roleService;

    @GetMapping("/{id}")
    public ResponseEntity<RoleDTO> findRoleById(@PathVariable Long id) throws ResourceNotFoundException {
        RoleDTO roleDTO = roleService.findById(id);
        logger.info("Role successfully returned: " + roleDTO);
        return ResponseEntity.ok(roleDTO);
    }

    @PostMapping
    public ResponseEntity<RoleDTO> createRole(@RequestBody RoleDTO roleDTO) throws ResourceNotFoundException {
        RoleDTO roleCreated = roleService.create(roleDTO);
        logger.info("Role successfully saved: " + roleCreated);
        return ResponseEntity.ok(roleCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteRoleById(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        roleService.deleteById(id);
        logger.info("Role with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Role deleted");
    }

    @PutMapping
    public ResponseEntity<RoleDTO> updateRole(@RequestBody RoleDTO roleDTO) throws ResourceNotFoundException, BadRequestException {
        RoleDTO roleUpdated = roleService.update(roleDTO);
        logger.info("Role successfully updated: " + roleDTO);
        return ResponseEntity.ok(roleUpdated);
    }

    @GetMapping
    public ResponseEntity<List<RoleDTO>> findAllRoles() {
        List<RoleDTO> roles = roleService.findAll();
        logger.info(roles.size() + (roles.size() == 1 ? " role" : " roles")  + " successfully returned.");
        return ResponseEntity.ok(roles);
    }
}
