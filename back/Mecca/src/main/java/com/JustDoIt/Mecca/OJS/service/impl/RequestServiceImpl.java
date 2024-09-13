package com.JustDoIt.Mecca.OJS.service.impl;

import com.JustDoIt.Mecca.OJS.mapper.RequestMapper;
import com.JustDoIt.Mecca.OJS.service.RequestService;
import com.JustDoIt.Mecca.OJS.vo.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImpl implements RequestService {

    private RequestMapper mapper;


    public RequestServiceImpl() {}
    @Autowired
    public RequestServiceImpl(RequestMapper mapper) {
        this.mapper=mapper;
    }


    @Override
    public int applicationgame(Request request) {
        int result=mapper.applicationgame(request);
        return result;
    }

    @Override
    public List<Request> registersearch(String mrWriterEmail) {
        List<Request> rList=mapper.registersearch(mrWriterEmail);
        return rList;
    }

    @Override
    public List<Request> applicationsearch(String mrWriterEmail) {
        List<Request> aList=mapper.applicationsearch(mrWriterEmail);
        return aList;
    }

    @Override
    public int accep(Integer mrNo) {
        int result= mapper.accep(mrNo);
        return result;
    }

    @Override
    public int refusal(Integer mrNo) {
        int result= mapper.refusal(mrNo);
        return result;
    }

    @Override
    public int checkgame(String memberId) {
        int result=mapper.checkgame(memberId);
        return result;
    }

    @Override
    public int gamecancel(Integer mNo) {
        int result=mapper.gamecancel(mNo);
        return result;
    }
}