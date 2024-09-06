import { useState, EventHandler, ReactNode } from 'react'

const MatchingList = () => {
    return (
        <>
            <div className="absolute left-[310px] top-[214px] w-[830px] flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-row items-center justify-start p-[30px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="relative flex-1 h-[75px] flex">
                        <div className="absolute left-0 top-[50px] w-[770px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080]">함께 즐길수록 재밌는 게임</div>
                        <div className="absolute left-0 top-0 w-[770px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000]">매칭</div>
                    </div>
                </div>
                <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-[5px] p-[15px] bg-[#0090f9] rounded-[10px]">
                        <img width="20" height="20" src="Edit 2156_3280.png"></img>
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">작성하기</div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[5px] p-[15px] border-[1px] border-solid border-[#000] rounded-[10px]">
                        <img width="20" height="20" src="Grid156_3283.png"></img>
                        <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] whitespace-nowrap">최신순</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="Image156_3289.png"></img>
                                <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="Star156_3293.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                            <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Party156_3304.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                            </div>
                        </div>
                        <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="Image286_1159.png"></img>
                                <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="Star286_1163.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                            <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Party286_1170.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                            </div>
                        </div>
                        <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="Image286_1177.png"></img>
                                <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="Star286_1181.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                            <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Party286_1188.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                            </div>
                        </div>
                        <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="Image286_1195.png"></img>
                                <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="Star286_1199.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                            <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Party286_1206.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                            </div>
                        </div>
                        <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="Image286_1213.png"></img>
                                <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="Star286_1217.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                            <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="Party286_1224.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                            </div>
                        </div>
                        <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                    </div>
                </div>
            </div>
            <div className="absolute left-[75px] top-[104px] w-[200px] flex flex-col items-start justify-start gap-[5px] p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                <div className="self-stretch text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#000] text-center">Top Players</div>
                <img width="180" height="0" src="Bar156_3408.png"></img>
                <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                            <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">소드마스터</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3415.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">1000</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                            <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대마법사</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3422.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">782</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                            <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대지의힘</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3429.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">124</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                            <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">킹콩</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3436.png"></img>
                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">35</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                            <div className="w-[20px] h-[20px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                            <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">고수</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end">
                            <img width="12" height="12" src="Star156_3443.png"></img>
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
        </>
    )
}

export default MatchingList