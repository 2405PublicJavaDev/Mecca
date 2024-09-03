package com.JustDoIt.Mecca.OJS.service.impl;

import com.JustDoIt.Mecca.OJS.mapper.MatchingMapper;
import com.JustDoIt.Mecca.OJS.mapper.SignalMapper;
import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.service.SignalService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.Signal;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class SignalServiceImpl implements SignalService {

    private SignalMapper mapper;


    public SignalServiceImpl() {}
    @Autowired
    public SignalServiceImpl(SignalMapper mapper) {
        this.mapper=mapper;
    }


    @Override
    public int applicationgame(Signal signal) {
        int result=mapper.applicationgame(signal);
        return result;
    }

    @Override
    public List<Signal> registersearch(String memberId) {
        List<Signal> rList=mapper.registersearch(memberId);
        return rList;
    }

    @Override
    public List<Signal> applicationsearch(String memberId) {
        List<Signal> aList=mapper.applicationsearch(memberId);
        return aList;
    }

    @Override
    public int accep(Integer signalNo) {
        int result= mapper.accep(signalNo);
        return result;
    }

    @Override
    public int refusal(Integer signalNo) {
        int result= mapper.refusal(signalNo);
        return result;
    }
}