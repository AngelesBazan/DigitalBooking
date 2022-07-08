package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.RoleDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Role;
import com.example.digitalbooking.repository.IRoleRepository;
import com.example.digitalbooking.service.IRoleService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RoleService implements IRoleService {
    private final IRoleRepository roleRepository;
    private final ObjectMapper mapper;

    @Override
    public RoleDTO findById(Long id) throws ResourceNotFoundException {
        Role role = roleRepository.findById(id).orElse(null);
        if(role == null) {
            throw new ResourceNotFoundException("There is no role with id=" + id + ".");
        }
        return mapper.convertValue(role, RoleDTO.class);
    }

    @Override
    public RoleDTO create(RoleDTO roleDTO) throws ResourceNotFoundException {
        Role role = mapper.convertValue(roleDTO, Role.class);
        return mapper.convertValue(roleRepository.save(role), RoleDTO.class);
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        Role role = roleRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no role with id=" + id + ".");
        }
        roleRepository.delete(role);
    }

    @Override
    public RoleDTO update(RoleDTO roleDTO) throws ResourceNotFoundException, BadRequestException {
        if(roleDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(roleDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no role with id=" + roleDTO.getId() + ".");
        }
        Role role = roleRepository.save(mapper.convertValue(roleDTO, Role.class));
        return mapper.convertValue(role, RoleDTO.class);
    }

    @Override
    public List<RoleDTO> findAll() {
        List<Role> roleList = roleRepository.findAll();
        List<RoleDTO> roleDTOList = roleList.stream().map(role -> mapper.convertValue(role, RoleDTO.class)).collect(Collectors.toList());
        return roleDTOList;
    }
}
