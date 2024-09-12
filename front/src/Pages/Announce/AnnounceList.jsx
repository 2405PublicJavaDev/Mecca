import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../UserContext';

const AnnounceList = () => {

    const nav = useNavigate();

    const { uEmail } = useContext(UserContext);

    const userInfoPage = () => {
        nav("/user/info");
    }

    const announceWritePage = () => {
        nav("/announce/write");
    }
    const announceDetailPage = () => {
        nav("/announce/detail");
    }



    return (
        <>
            <div className="absolute left-[310px] top-[214px] w-[830px] flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-row items-center justify-start p-[30px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="relative flex-1 h-[75px] flex">
                        <div className="absolute left-0 top-0 w-[770px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000]">공지사항</div>
                        <div className="absolute left-0 top-[50px] w-[770px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080]">함께 만들어가는 최고의 게임 커뮤니티, MeCCa</div>
                    </div>
                </div>
                {(uEmail == 'mecca@gmail.com') && (
                    <button onClick={announceWritePage} className="flex flex-row items-center justify-start gap-[5px] p-[15px] bg-[#0090f9] rounded-[10px]">
                        <img width="20" height="20" src="/assets/Index/Write.png"></img>
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">작성하기</div>
                    </button>
                )}
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <button onClick={userInfoPage} className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                            </button>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전</div>
                        </div>
                        <button onClick={announceDetailPage} className="w-[830px] h-[24px] text-[16px] leading-[24px] font-['Roboto'] text-[#000] text-left">글 제목</button>
                        <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnnounceList