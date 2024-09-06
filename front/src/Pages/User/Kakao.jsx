import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"

const Kakao = () => {
    const [message, setMessage] = useState();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            axios.post('/api/kakao', { code })
                .then(response => {
                    setMessage(`로그인 성공! ${JSON.stringify(response.data)}`);
                })
                .catch(error => {
                    setMessage(`로그인 실패: ${error.message}`);
                });
        }
    }, []);

    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
            <div className="relative self-stretch h-[75px] shrink-0 flex">
                <div className="absolute left-0 top-[50px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">MeCCa는 게이머들을 위한 매칭 플랫폼입니다.</div>
                <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">KAKAO 계정을 이용한 회원가입</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">닉네임</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">닉네임을 입력해 주세요.</div>
                    </div>
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">이미 존재하는 닉네임입니다.</div>
                </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">회원가입</div>
            </div>
        </div>
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute left-[1170px] top-[13px] flex flex-row items-center justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">로그인</div>
                </div>
                <div className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] font-semibold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                </div>
            </div>
            <div className="absolute -translate-y-1/2 left-[50px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
        </div>
    </div>)
}

export default Kakao