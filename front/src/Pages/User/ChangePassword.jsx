import { useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let checkPassword = false;
let checkPasswordConfirm = false;

const ChnagePassword = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        uPassword: '',
    });

    const handleChangePassword = async (e) => {
        e.preventDefault();
        await axios.post('/api/user/changepassword', {
            uPassword: values.uPassword,
        });
        nav('/user/mypage');
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
        const changePassword = document.querySelector("#changePassword");

        if (checkPassword === true && checkPasswordConfirm === true) {
            changePassword.disabled = false;
        } else {
            changePassword.disabled = true;
        }
    }



    return (
        <>
            <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                <div className="self-stretch text-[31px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">변경할 비밀번호를 입력해주세요.</div>
                <form onSubmit={handleChangePassword} id='form' autoComplete='off' className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">신규 비밀번호</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validatePassword} id='password' placeholder='비밀번호를 입력해주세요.' type='password' name='uPassword' onChange={(e) => setValues({ ...values, uPassword: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='passwordError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">신규 비밀번호 확인</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validatePasswordConfirm} id='passwordConfirm' placeholder='비밀번호를 다시 입력해주세요.' type='password' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='passwordConfirmError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                </form >
                <button disabled id='changePassword' type='submit' form='form' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">비밀번호 변경</div>
                </button>
            </div >
        </>
    )
}

export default ChnagePassword