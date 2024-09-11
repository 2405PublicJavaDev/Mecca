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
    public void signUpUser(User user) { mapper.signUpUser(user); }

    @Override
    public User signInUser(User user) { return mapper.signInUser(user); }

    @Override
    public void updateUser(User user) {
        mapper.updateUser(user);
    }

    @Override
    public void deleteUser(String uEmail) {
        mapper.deleteUser(uEmail);
    }

    @Override
    public void updatePassword(User user) {
        mapper.updatePassword(user);
    }

    @Override
    public User getUser(String uEmail, String uNickname) { return mapper.getUser(uEmail, uNickname); }
}
