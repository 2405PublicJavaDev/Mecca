import { useState, EventHandler, ReactNode, useContext } from 'react'
import axios from "axios"

const Index = () => {
    return (
        <>
            <div className="absolute left-[305px] top-[214px] w-[830px] flex flex-wrap items-start justify-start gap-[30px]">
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">자유</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">매칭</div>
                    </div>
                    <div className="w-[400px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                                <div className="flex flex-row items-center justify-end gap-[1px]">
                                    <img width="14" height="14" src="/assets/Index/Party.png"></img>
                                    <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                                <div className="flex flex-row items-center justify-end gap-[1px]">
                                    <img width="14" height="14" src="/assets/Index/Party.png"></img>
                                    <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                                <div className="flex flex-row items-center justify-end gap-[1px]">
                                    <img width="14" height="14" src="/assets/Index/Party.png"></img>
                                    <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                                <div className="flex flex-row items-center justify-end gap-[1px]">
                                    <img width="14" height="14" src="/assets/Index/Party.png"></img>
                                    <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[장르] - 태그1, 태그2, 태그3 (티어 또는 레벨)</div>
                                <div className="flex flex-row items-center justify-end gap-[1px]">
                                    <img width="14" height="14" src="/assets/Index/Party.png"></img>
                                    <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0/4</div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">BEST of 자유</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">공지사항</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                    <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                    <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="self-stretch flex flex-row items-center justify-end">
                                    <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                    <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                </div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">•</div>
                                <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전 </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                <div className="flex flex-row items-center justify-end gap-[7px]">
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/View.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/Chat.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                    <div className="flex flex-row items-center justify-end gap-[1px]">
                                        <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                        <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
                배너 광고
            */}
            {/* <div className="absolute left-[75px] top-[104px] w-[1290px] h-[896px] flex">
                <div className="absolute left-[1088px] top-0 w-[202px] h-[433px] bg-[#d9d9d9] rounded-[10px]"></div>
                <div className="absolute left-[1088px] top-[463px] w-[202px] h-[433px] bg-[#d9d9d9] rounded-[10px]"></div>
                <div className="absolute left-[2px] top-[518px] w-[200px] h-[378px] bg-[#d9d9d9] rounded-[10px]"></div>
                <div className="absolute left-0 top-[219px] w-[200px] h-[269px] bg-[#d9d9d9] rounded-[10px]"></div>
                <div className="absolute left-[230px] top-0 w-[830px] h-[80px] bg-[#d9d9d9] rounded-[10px]"></div>
            </div> */}
        </>
    )
}

export default Index