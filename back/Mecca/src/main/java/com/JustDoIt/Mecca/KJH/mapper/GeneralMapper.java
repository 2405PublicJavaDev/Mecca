package com.JustDoIt.Mecca.KJH.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GeneralMapper {

    /**
     * 자유 작성 Mapper
     * @return
     */
    int insertGeneral();

    /**
     * 자유 조회 Mapper
     * @return
     */
    int selectGeneral();

    /**
     * 자유 수정 Mapper
     * @return
     */
    int updateGeneral();

    /**
     * 자유 삭제 Mapper
     * @return
     */
    int deleteGeneral();
}
