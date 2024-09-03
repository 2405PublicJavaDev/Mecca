package com.JustDoIt.Mecca.OJS.mapper;

import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.Signal;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;
import org.thymeleaf.exceptions.TemplateInputException;

import java.util.List;
import java.util.Map;

@Mapper
public interface SignalMapper {

    int applicationgame(Signal signal);

    List<Signal> registersearch(String memberId);

    List<Signal> applicationsearch(String memberId);

    int accep(Integer signalNo);

    int refusal(Integer signalNo);
}