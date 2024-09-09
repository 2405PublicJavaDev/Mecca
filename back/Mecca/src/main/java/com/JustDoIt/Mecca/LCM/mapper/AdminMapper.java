package com.JustDoIt.Mecca.LCM.mapper;


import org.apache.ibatis.annotations.Mapper;

import java.sql.Timestamp;

@Mapper
public interface AdminMapper {

    int reportid(String reportid, Timestamp reportdate);
}
