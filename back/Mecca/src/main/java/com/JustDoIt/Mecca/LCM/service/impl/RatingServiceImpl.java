package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.LCM.mapper.RatingMapper;
import com.JustDoIt.Mecca.LCM.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RatingServiceImpl implements RatingService {

    private RatingMapper mapper;

    public RatingServiceImpl() {}
    @Autowired
    public RatingServiceImpl(RatingMapper mapper) { this.mapper = mapper; }


    @Override
    public int plusRate(String uEmail) {
        int result = mapper.plusRate(uEmail);
        if(result <= 0) {
            mapper.resetRate(uEmail);
            return 0;
        }
        return result;
    }

    @Override
    public int minusRate(String uEmail) {
        int result = mapper.minusRate(uEmail);
        if (result <= 0) {
            mapper.resetRate(uEmail);
            return 0;
        }
        return result;
    }

    @Override
    public List<Map<String, Object>> getTopRatedUsers() {
        return mapper.getTopRatedUsers();
    }
}
