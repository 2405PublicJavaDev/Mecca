package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.LCM.mapper.UserMapper;
import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserMapper mapper;

    public UserServiceImpl() {}
    @Autowired
    public UserServiceImpl(UserMapper mapper) { this.mapper = mapper; }

    @Override
    public int insertUser(User user) {
        int result = mapper.insertUser(user);
        return result;
    }

    @Override
    public int selectUser(User user) {
        int result = mapper.selectUser(user);
        return result;
    }

    @Override
    public int updateUser(User user) {
        int result = mapper.updateUser(user);
        return result;
    }

    @Override
    public int deleteUser(String uEmail) {
        int result = mapper.deleteUser(uEmail);
        return result;
    }

    @Override
    public User selectUserByEmail(String uEmail) {
        User user = mapper.selectUserByEmail(uEmail);
        return user;
    }
}