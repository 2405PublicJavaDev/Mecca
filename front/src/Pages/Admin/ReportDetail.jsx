import { useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const ReportDetail = () => {

    const nav = useNavigate();

    const userInfoPage = () => {
        nav("/user/info");
    }



    return (
        <>
            <div className="absolute left-[441px] top-[129px] w-[557px] flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[25px]">
                    <div className="flex-1 h-0 border-[1px] border-solid border-[#00000080]"></div>
                    <div className="text-[19px] leading-[40px] font-['Roboto'] font-semibold text-[#00000080] whitespace-nowrap">신고</div>
                    <div className="flex-1 h-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <button onClick={userInfoPage}><img width="50" height="50" src="/assets/Index/Image.png"></img></button>
                    <div className="flex-1 h-[49px] flex flex-col items-start justify-center">
                        <button onClick={userInfoPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</button>
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                            </div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                            <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch text-[32px] leading-[50px] font-['Roboto'] font-semibold text-[#000]">욕설, 비방, 차별, 혐오</div>
                <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">내용 내용<br /><br />단락1<br /><br />가나다라마바사아자차카타파하<br /><br /><br />단락2<br /><br />ABCDEFGHIJKLMNOPQRSTUVWXYZ </div>
                <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[20px]">
                    <button className="flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] whitespace-nowrap">신고자 제재</div>
                    </button>
                    <button className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">작성자 제재</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ReportDetail