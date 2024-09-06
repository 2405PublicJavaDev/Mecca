import { useState, EventHandler, ReactNode } from 'react'

const FindAccount = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
            <div className="relative self-stretch h-[99px] shrink-0 flex">
                <div className="absolute left-0 top-[49px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">회원 가입시 입력하신 이메일 주소를 입력하시면,<br /> 해당 이메일로 인증 번호를 보내드립니다.</div>
                <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">계정 찾기</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">이메일 주소</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">이메일을 입력해 주세요.</div>
                    </div>
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">올바른 이메일 형식이 아닙니다.</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">인증 번호 발급</div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">인증 번호</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">인증 번호를 입력해 주세요.</div>
                    </div>
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">올바른 인증 번호가 아닙니다.</div>
                </div>
                <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center">인증 번호는 3분까지 유효합니다.</div>
                <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">인증 번호 확인</div>
                </div>
            </div>
        </div>
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
        </div>
    </div>)
}

export default FindAccount