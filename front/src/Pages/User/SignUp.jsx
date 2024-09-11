import { useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let checkNickname = false;
let checkEmail = false;
let checkPassword = false;
let checkPasswordConfirm = false;

const SignUp = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        uEmail: '',
        uPassword: '',
        uNickname: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const [verifyCode, setVerifyCode] = useState(false);

    const handleKakao = () => {
        const authorizationUri = "https://kauth.kakao.com/oauth/authorize";
        const client_id = "25431136bde1cd0a177ed0354aca3557";
        const redirectUri = "http://localhost:3000/kakao/callback";

        const url = `${authorizationUri}?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`

        window.location.href = url;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const check = await axios.post('/api/user/signup/check', {
            uEmail: values.uEmail,
            uNickname: values.uNickname,
        });
        if (check.data == '') {
            setIsSuccess(true);
            const code = await axios.post('/api/email/verify/signup', {
                uEmail: values.uEmail,
            });
            setVerifyCode(code.data);
        } else {
            document.querySelector("#signUp").disabled = true;
            if (check.data.unickname == document.querySelector("#nickname").value) {
                document.querySelector("#nicknameError").textContent = "이미 존재하는 닉네임입니다."
                checkNickname = false;
            }
            if (check.data.uemail == document.querySelector("#email").value) {
                document.querySelector("#emailError").textContent = "이미 존재하는 이메일입니다."
                checkEmail = false;
            }
        }
    }

    const handleVerifyCode = async () => {
        const code = document.querySelector("#code").value;

        if (code == verifyCode) {
            await axios.post('/api/user/signup/confirm', {
                uEmail: values.uEmail,
                uNickname: values.uNickname,
                uPassword: values.uPassword,
            });
            nav('/user/signin');
        } else {
            document.querySelector("#codeError").textContent = "올바른 인증 번호가 아닙니다.";
        }
    }



    // 닉네임 유효성 검사 함수
    const validateNickname = () => {
        checkNickname = false;

        const nickname = document.querySelector('#nickname').value.trim();
        const nicknameError = document.querySelector('#nicknameError');

        // (형식: 한글, 영문, 숫자 포함 10글자 이하, 특수문자 사용 안 됨)
        const nicknamePattern = /^[a-zA-Z0-9가-힣]{1,10}$/;

        if (!nickname) {
            nicknameError.textContent = '닉네임을 입력해주세요.';
        } else if (nickname.length < 3) {
            nicknameError.textContent = '최소 3자 이상 입력하세요.';
        } else if (nickname.length > 10) {
            nicknameError.textContent = '10자를 넘지 않게 입력하세요.';
        } else if (!nicknamePattern.test(nickname)) {
            nicknameError.textContent = '영문만 입력해주세요.';
        } else {
            nicknameError.textContent = ''; // 통과
            checkNickname = true;
        }

        formButtonCheck();
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
            passwordError.textContent = '알파벳, 숫자, 특수문자를 모두 입력하세요.';
        } else {
            passwordError.textContent = ''; // 통과
            validatePasswordConfirm();
            checkPassword = true
        }

        formButtonCheck();
    }

    // 비밀번호 확인 유효성 검사 함수
    const validatePasswordConfirm = () => {
        checkPasswordConfirm = false;

        const password = document.querySelector('#password').value;
        const passwordConfirm = document.querySelector('#passwordConfirm').value;

        const passwordConfirmError = document.querySelector('#passwordConfirmError');

        if (!passwordConfirm) {
            passwordConfirmError.textContent = '비밀번호 확인을 입력하세요.';
        } else if (password !== passwordConfirm) {
            passwordConfirmError.textContent = '비밀번호를 일치하게 입력하세요.';
        } else {
            passwordConfirmError.textContent = ''; // 통과
            checkPasswordConfirm = true
        }

        formButtonCheck();
    }

    function formButtonCheck() {
        const signUp = document.querySelector("#signUp");

        if (checkNickname === true && checkEmail === true && checkPassword === true && checkPasswordConfirm === true) {
            signUp.disabled = false;
        } else {
            signUp.disabled = true;
        }
    }



    return (
        <>
            {(isSuccess == false) && (
                <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                    <div className="relative self-stretch h-[75px] shrink-0 flex">
                        <div className="absolute left-0 top-[50px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">MeCCa는 게이머들을 위한 매칭 플랫폼입니다.</div>
                        <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa에 오신것을 환영합니다!</div>
                    </div>
                    {/* 
                        회원가입 폼
                    */}
                    <form onSubmit={handleSignUp} id='form' autoComplete='off' className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">닉네임</div>
                            <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                                <input onInput={validateNickname} id='nickname' placeholder='닉네임을 입력해 주세요.' type='text' name='uNickname' onChange={(e) => setValues({ ...values, uNickname: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                            </div>
                            <div id='nicknameError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                        </div>
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
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">비밀번호 확인</div>
                            <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                                <input onInput={validatePasswordConfirm} id='passwordConfirm' placeholder='비밀번호를 다시 입력해주세요.' type='password' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                            </div>
                            <div id='passwordConfirmError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                        </div>
                    </form>
                    <div className="self-stretch h-[93px] shrink-0 flex flex-col items-start justify-start gap-[13px]">
                        {/* 
                            일반 회원가입
                        */}
                        <button disabled id='signUp' type='submit' form='form' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                            <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                        </button>
                        {/* 
                            카카오 회원가입
                        */}
                        <button onClick={handleKakao} className="self-stretch flex-1 flex flex-col items-start justify-start">
                            <img width="466" height="40" src="/assets/User/Kakao.png"></img>
                        </button>
                    </div>
                </div >
            )}


            {(isSuccess == true) && (
                <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                    <div className="relative self-stretch h-[99px] shrink-0 flex">
                        <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">이메일 인증</div>
                        <div className="absolute left-0 top-[49px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center"> 회원 가입 때 입력하신 이메일로 인증 번호를 보냈습니다.<br />올바른 인증 번호를 입력하시면 회원 가입이 완료됩니다.</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">인증 번호</div>
                            <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                                <input autoComplete='off' id='code' placeholder='인증 번호를 입력해 주세요.' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                            </div>
                            <div id='codeError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                        </div>
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center">인증 번호는 일시적으로 유효합니다.</div>
                        <button onClick={handleVerifyCode} className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                            <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">인증 번호 확인</div>
                        </button>
                    </div>
                </div >
            )}
        </ >
    )
}

export default SignUp
