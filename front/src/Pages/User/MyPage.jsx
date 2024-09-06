import { useState, EventHandler, ReactNode } from 'react'

const Mypage = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
            <div className="self-stretch flex flex-row items-center justify-between">
                <div className="text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] whitespace-nowrap">회원정보</div>
                <div className="w-[100px] h-[100px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">닉네임</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000]">소드마스터</div>
                    </div>
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">이미 존재하는 닉네임입니다.</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">한 줄 소개</div>
                    <div className="self-stretch h-[287px] shrink-0 flex flex-row items-start justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">나를 소개해주세요.</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">저장</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">비밀번호 변경</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">회원 탈퇴</div>
                </div>
            </div>
        </div>
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
        </div>
    </div>)
}

export default Mypage