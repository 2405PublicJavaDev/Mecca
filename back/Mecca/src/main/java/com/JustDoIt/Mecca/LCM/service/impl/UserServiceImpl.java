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
    public int signUpUser(User user) {
        int result = mapper.signUpUser(user);
        return result;
    }
    @Override
    public User getUser(String uEmail, String uNickname) {
        User getUser = mapper.getUser(uEmail, uNickname);
        return getUser;
    }

    @Override
    public User signInUser(User user) {
        User result = mapper.signInUser(user);
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