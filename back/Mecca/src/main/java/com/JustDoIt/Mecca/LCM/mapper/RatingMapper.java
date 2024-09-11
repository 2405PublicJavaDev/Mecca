package com.JustDoIt.Mecca.LCM.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface RatingMapper {

    /**
     * 별점 1점 추가 Mapper
     * @param uEmail
     * @return int
     */
    int plusRate(String uEmail);

    /**
     * 별점 1점 제거 Mapper
     * @param uEmail
     * @return int
     */
    int minusRate(String uEmail);

    /**
     * 상위 랭킹 출력 Mapper
     * @return List<Map<String, Object>>
     */
    List<Map<String, Object>> getTopRatedUsers();

    /**
     * 점수를 0으로 설정하는 메서드
     * @param uEmail
     */
    void resetRate(String uEmail);
}