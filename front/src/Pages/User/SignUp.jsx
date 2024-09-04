import { useState, EventHandler, ReactNode } from 'react'

const SignUp = () => {

    const indexPage = () => {
        window.location.href = "/";
    }

    const signUpPage = () => {
        window.location.href = "/user/signup";
    }

    const signInPage = () => {
        window.location.href = "/user/signin";
    }

    const handleSignup = () => {

    }

    const handleKakao = () => {
        const authorizationUri = "https://kauth.kakao.com/oauth/authorize";
        const client_id = "25431136bde1cd0a177ed0354aca3557";
        const redirectUri = "http://localhost:3000/kakao/callback";

        const url = `${authorizationUri}?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`

        window.location.href = url;
    }

    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
            <div className="relative self-stretch h-[75px] shrink-0 flex">
                <div className="absolute left-0 top-[50px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">MeCCa는 게이머들을 위한 매칭 플랫폼입니다.</div>
                <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa에 오신것을 환영합니다!</div>
            </div>
            {/* 
                회원가입 폼
            */}
            <form action='/api/user/insert' method='post' id='signup' className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">닉네임</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <input placeholder='닉네임을 입력해 주세요.' type='text' name='uNickname' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                    </div>
                    <div hidden className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">이미 존재하는 닉네임입니다.</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">이메일</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <input placeholder='이메일을 입력해 주세요.' type='email' name='uUEmail' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                    </div>
                    <div hidden className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">올바른 이메일 형식이 아닙니다.</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">비밀번호</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <input placeholder='비밀번호를 입력해주세요.' type='password' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                    </div>
                    <div hidden className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">최소 8자리 이상이어야 합니다.</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">비밀번호 확인</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <input placeholder='비밀번호를 다시 입력해주세요.' type='password' name='uPassword' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                    </div>
                    <div hidden className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">비밀번호가 일치하지 않습니다.</div>
                </div>
            </form>
            {/* 
                버튼
            */}
            <div className="self-stretch h-[93px] shrink-0 flex flex-col items-start justify-start gap-[13px]">
                <button type='submit' form='signup' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                </button>
                {/* 
                    카카오 로그인
                */}
                <button onClick={handleKakao} className="self-stretch flex-1 flex flex-col items-start justify-start">
                    <img width="466" height="40" src="/assets/User/Kakao.png"></img>
                </button>
            </div>
        </div>

        {/* 
            헤더
         */}
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute left-[1145px] top-[13px] flex flex-row items-center justify-start gap-[20px]">
                <button onClick={signInPage} className="flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">로그인</div>
                </button>
                <button onClick={signUpPage} className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[30px]">
                    <div className="text-[16px] leading-[25px] font-['Roboto'] font-semibold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                </button>
            </div>
            <button onClick={indexPage} className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</button>
        </div>
    </div>)
}

export default SignUp