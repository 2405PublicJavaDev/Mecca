package com.JustDoIt.Mecca.OJS.mapper;

import com.JustDoIt.Mecca.OJS.vo.Request;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RequestMapper {

    int applicationgame(Request request);

    List<Request> registersearch(String mrWriterEmail);

    List<Request> applicationsearch(String mrWriterEmail);

    int accep(Integer mrNo);

    int refusal(Integer mrNo);

    int checkgame(String memberId);

    int gamecancel(Integer mNo);
}