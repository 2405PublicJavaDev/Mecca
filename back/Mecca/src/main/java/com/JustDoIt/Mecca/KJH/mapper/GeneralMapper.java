package com.JustDoIt.Mecca.KJH.mapper;

import com.JustDoIt.Mecca.KJH.vo.General;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface GeneralMapper {

    /**
     * 게시글 작성 Mapper
     * @param general 게시글 정보
     * @return 성공 시 1, 실패 시 0
     */
    int insertGeneral(General general);

    /**
     * 게시글 조회 Mapper
     * @param id 게시글 ID
     * @return 조회된 게시글 정보
     */
    General selectGeneral(@Param("id") int id);

    /**
     * 게시글 리스트 조회 Mapper
     * @return 게시글 리스트
     */
    List<General> selectGeneralList();

    /**
     * 게시글 수정 Mapper
     * @param general 수정할 게시글 정보
     * @return 성공 시 1, 실패 시 0
     */
    int updateGeneral(General general);

    /**
     * 게시글 삭제 Mapper
     * @param generalNo 삭제할 게시글 ID
     * @return 성공 시 1, 실패 시 0
     */
    int deleteGeneral(Integer generalNo);

}
