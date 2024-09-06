import { useState, EventHandler, ReactNode } from 'react'

const SignOut = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[487px] top-[146px] flex flex-col items-start justify-start gap-[31px]">
            <div className="relative w-[466px] h-[75px] shrink-0 flex">
                <div className="absolute left-0 top-[50px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">더 이상 MeCCa의 화려한 매칭 서비스를 이용할 수 없어요!</div>
                <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">정말 탈퇴하시겠습니까?</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">취소</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">예, 탈퇴하겠습니다.</div>
                </div>
            </div>
        </div>
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
        </div>
    </div>)
}

export default SignOut