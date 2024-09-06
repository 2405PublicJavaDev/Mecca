import { useState, EventHandler, ReactNode } from 'react'

const GeneralList = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[310px] top-[214px] w-[830px] flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-start p-[30px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                <div className="relative flex-1 h-[75px] flex">
                    <div className="absolute left-0 top-[50px] w-[770px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080]">함께 할 때 더 즐거운 순간</div>
                    <div className="absolute left-0 top-0 w-[770px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000]">자유</div>
                </div>
            </div>
            <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[5px] p-[15px] bg-[#0090f9] rounded-[10px]">
                    <img width="20" height="20" src="Edit 2156_405.png"></img>
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">작성하기</div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] p-[15px] border-[1px] border-solid border-[#000] rounded-[10px]">
                    <img width="20" height="20" src="Grid156_409.png"></img>
                    <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] whitespace-nowrap">최신순</div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <img width="20" height="20" src="Image156_3140.png"></img>
                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3144.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                        <div className="flex flex-row items-center justify-end gap-[7px]">
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="View156_3152.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Chat156_3155.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Thumbs up156_3158.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <img width="20" height="20" src="Image156_3164.png"></img>
                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3168.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                        <div className="flex flex-row items-center justify-end gap-[7px]">
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="View156_3176.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Chat156_3179.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Thumbs up156_3182.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <img width="20" height="20" src="Image156_3188.png"></img>
                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3192.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                        <div className="flex flex-row items-center justify-end gap-[7px]">
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="View156_3200.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Chat156_3203.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Thumbs up156_3206.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <img width="20" height="20" src="Image156_3212.png"></img>
                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3216.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                        <div className="flex flex-row items-center justify-end gap-[7px]">
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="View156_3224.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Chat156_3227.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Thumbs up156_3230.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <img width="20" height="20" src="Image156_3236.png"></img>
                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3240.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                        </div>
                        <div className="whitespace-nowrap"></div>
                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                        <div className="flex flex-row items-center justify-end gap-[7px]">
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="View156_3248.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Chat156_3251.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Thumbs up156_3254.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
            </div>
        </div>
        <div className="absolute left-[75px] top-[104px] w-[200px] flex flex-col items-start justify-start gap-[5px] p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
            <div className="self-stretch text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#000] text-center">Top Players</div>
            <img width="180" height="0" src="Bar156_2096.png"></img>
            <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">소드마스터</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="Star156_2103.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">1000</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대마법사</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="Star156_2110.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">782</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대지의힘</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="Star156_2117.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">124</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">킹콩</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="Star156_2124.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">35</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">고수</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="Star156_2131.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">23</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute left-[75px] top-[104px] w-[1290px] h-[896px] flex">
            <div className="absolute left-[1088px] top-0 w-[202px] h-[433px] bg-[#d9d9d9] rounded-[10px]"></div>
            <div className="absolute left-[1088px] top-[463px] w-[202px] h-[433px] bg-[#d9d9d9] rounded-[10px]"></div>
            <div className="absolute left-[2px] top-[518px] w-[200px] h-[378px] bg-[#d9d9d9] rounded-[10px]"></div>
            <div className="absolute left-0 top-[219px] w-[200px] h-[269px] bg-[#d9d9d9] rounded-[10px]"></div>
            <div className="absolute left-[230px] top-0 w-[830px] h-[80px] bg-[#d9d9d9] rounded-[10px]"></div>
        </div>
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+306px)] top-1/2 w-[218px] flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                <img width="24" height="24" src="Icon156_2000.png"></img>
                <div className="flex-1 text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#00000040]">검색</div>
            </div>
            <div className="absolute left-[305px] top-[25px] flex flex-row items-center justify-start gap-[30px]">
                <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">자유</div>
                <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">매칭</div>
                <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">공지사항</div>
            </div>
            <div className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
            <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                <img width="35" height="35" src="Chat156_2008.png"></img>
                <img width="35" height="35" src="Notification156_2009.png"></img>
                <div className="w-[35px] h-[35px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
            </div>
        </div>
    </div>)
}

export default GeneralList