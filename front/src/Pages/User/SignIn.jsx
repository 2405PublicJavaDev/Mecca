import { useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let checkEmail = false;
let checkPassword = false;

const SignIn = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        uEmail: '',
        uPassword: '',
    });

    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/user/signin', {
            uEmail: values.uEmail,
            uPassword: values.uPassword,
        });
        if (response.data != '') {
            window.location.href = "/";
        } else {
            document.querySelector("#signIn").disabled = true;
            document.querySelector("#passwordError").textContent = "이메일 또는 비밀번호가 일치하지 않습니다.";
            checkPassword = false;
        }
    }

    const handleKakao = () => {
        const authorizationUri = "https://kauth.kakao.com/oauth/authorize";
        const client_id = "25431136bde1cd0a177ed0354aca3557";
        const redirectUri = "http://127.0.0.1:3000/kakao/callback";
        // const redirectUri = "http://192.168.60.205/kakao/callback";

        const url = `${authorizationUri}?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`

        window.location.href = url;
    }

    const findAccountPage = () => {
        nav('/user/findaccount');
    }



    // 이메일 유효성 검사 함수
    const validateEmail = () => {
        checkEmail = false;

        const email = document.querySelector('#email').value.trim();
        const emailError = document.querySelector('#emailError');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            emailError.textContent = '이메일을 입력해주세요.';
        } else if (!emailPattern.test(email)) {
            emailError.textContent = '이메일 형식을 맞춰주세요.';
        } else {
            emailError.textContent = ''; // 통과
            checkEmail = true
        }

        formButtonCheck();
    }

    // 비밀번호 유효성 검사 함수
    const validatePassword = () => {
        checkPassword = false;

        const password = document.querySelector('#password').value;
        const passwordError = document.querySelector('#passwordError');

        // (형식: 한글 안 되고, 영문, 숫자, 특수문자 포함)
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!password) {
            passwordError.textContent = '비밀번호를 입력하세요.';
        } else if (password.length < 8) {
            passwordError.textContent = '최소 8자 이상 입력하세요.';
        } else if (!passwordPattern.test(password)) {
            passwordError.textContent = '알파벳, 숫자, 특수문자를 모두 조합해서 입력하세요.';
        } else {
            passwordError.textContent = ''; // 통과
            checkPassword = true
        }

        formButtonCheck();
    }

    function formButtonCheck() {
        const signIn = document.querySelector("#signIn");

        if (checkEmail === true && checkPassword === true) {
            signIn.disabled = false;
        } else {
            signIn.disabled = true;
        }
    }



    return (
        <>
            <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                <div className="relative self-stretch h-[75px] shrink-0 flex">
                    <div className="absolute left-0 top-[50px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">MeCCa는 게이머들을 위한 매칭 플랫폼입니다.</div>
                    <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa에 오신것을 환영합니다!</div>
                </div>
                {/* 
                    로그인 폼
                */}
                <form onSubmit={handleSignIn} id='form' autoComplete='off' className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">이메일</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validateEmail} id='email' placeholder='이메일을 입력해 주세요.' type='email' name='uEmail' onChange={(e) => setValues({ ...values, uEmail: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='emailError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">비밀번호</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validatePassword} id='password' placeholder='비밀번호를 입력해주세요.' type='password' name='uPassword' onChange={(e) => setValues({ ...values, uPassword: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='passwordError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                </form>
                <div className="self-stretch h-[146px] shrink-0 flex flex-col items-start justify-start gap-[13px]">
                    {/* 
                        일반 로그인
                    */}
                    <button disabled id='signIn' type='submit' form='form' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">로그인</div>
                    </button>
                    {/* 
                        카카오 로그인
                    */}
                    <button onClick={handleKakao} className="self-stretch flex-1 flex flex-col items-start justify-start">
                        <img width="466" height="40" src="/assets/User/Kakao.png"></img>
                    </button>
                    {/* 
                        계정 찾기
                    */}
                    <button onClick={findAccountPage} className="self-stretch flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">계정 찾기</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SignIn