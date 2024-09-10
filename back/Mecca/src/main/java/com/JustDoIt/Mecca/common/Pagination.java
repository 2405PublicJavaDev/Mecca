package com.JustDoIt.Mecca.common;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class Pagination {

	private int currentPage;
	private int totalCount;
	
	private int boardLimit = 10;
	private int naviLimit = 10;
	
	private int maxPage;
	private int startNavi;
	private int endNavi;
	
	private int prevPage;
	private int nextPage;

	public Pagination(int totalCount,int currentPage) {
		this.totalCount = totalCount;
		this.currentPage = currentPage;
		makePagination();
	}
	
	private void makePagination() {
		maxPage = (int) Math.ceil((double) totalCount / boardLimit);
		startNavi = ((currentPage - 1) / naviLimit) * naviLimit + 1;
		endNavi = (startNavi + naviLimit - 1);
		endNavi = Math.min(endNavi, maxPage);

		prevPage = (currentPage <= naviLimit) ? 1 : startNavi - 1;
		nextPage = (endNavi == maxPage) ? maxPage : endNavi + 1;
	}
}
