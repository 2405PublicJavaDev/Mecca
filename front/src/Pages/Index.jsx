import { useState, EventHandler, ReactNode } from 'react'

const Index = () => {
    const handleSignup = () => {
        window.location.href = "/user/signup";

        // const authorizationUri = "https://kauth.kakao.com/oauth/authorize";
        // const client_id = "25431136bde1cd0a177ed0354aca3557";
        // const redirectUri = "http://localhost:3000/kakao/callback";

        // const url = `${authorizationUri}?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`

        // window.location.href = url;
    }

    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
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
        <div className="absolute left-[75px] top-[104px] w-[200px] flex flex-col items-start justify-start gap-[5px] p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
            <div className="self-stretch text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#000] text-center">Top Players</div>
            <img width="180" height="0" src="/assets/Index/Bar.png"></img>
            <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <img width="20" height="20" src="/assets/Index/Image.png"></img>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">소드마스터</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="/assets/Index/Star.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.9</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <img width="20" height="20" src="/assets/Index/Image.png"></img>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대마법사</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="/assets/Index/Star.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.8</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <img width="20" height="20" src="/assets/Index/Image.png"></img>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대지의힘</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="/assets/Index/Star.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.7</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <img width="20" height="20" src="/assets/Index/Image.png"></img>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">킹콩</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="/assets/Index/Star.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.5</div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                        <img width="20" height="20" src="/assets/Index/Image.png"></img>
                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">고수</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="12" height="12" src="/assets/Index/Star.png"></img>
                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.3</div>
                    </div>
                </div>
            </div>
        </div>\
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

        {/* 
            헤더
         */}
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute left-[1145px] top-[13px] flex flex-row items-center justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">로그인</div>
                </div>
                {/* 
                    카카오로 회원 가입 임시
                */}
                <button onClick={handleSignup} className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] font-semibold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                </button>
            </div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+306px)] top-1/2 w-[218px] flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                <img width="24" height="24" src="/assets/Index/Icon.png"></img>
                <div className="flex-1 text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#00000040]">검색</div>
            </div>
            <div className="absolute left-[305px] top-[25px] w-[265px] h-[25px] flex">
                <div className="absolute left-0 top-0 flex flex-row items-center justify-start gap-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">자유</div>
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">매칭</div>
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">공지사항</div>
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">1:1 문의</div>
                </div>
            </div>
            <div className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
        </div>
    </div>)
}

export default Index