import { useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let checkEmail = false;

const FindAccount = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        uEmail: '',
    });

    const [verifyCode, setVerifyCode] = useState('');

    const [isSuccess, setIsSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        setVerifyCode('@')
        const response = await axios.post('/api/email/verify/findaccount', {
            uEmail: values.uEmail,
        });
        if (response.data != 'notUser' && response.data != 'kakao') {
            setVerifyCode(response.data);
        } else if (response.data == 'notUser') {
            setVerifyCode('');
            setErrorMessage("회원 가입 되지 않은 유저입니다.");
        } else {
            setVerifyCode('');
            setErrorMessage("카카오로 회원 가입한 유저입니다.");
        }
    }

    const handleCheckVerifyCode = async () => {
        const code = document.querySelector("#code").value;

        if (code == verifyCode) {
            setIsSuccess(true);
            await axios.post('/api/email/temp', {
                uEmail: values.uEmail,
            });
        } else {
            document.querySelector("#codeError").textContent = "올바른 인증 번호가 아닙니다.";
        }
    }

    const indexPage = () => {
        nav('/user/signin');
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

    function formButtonCheck() {
        const verifyCode = document.querySelector("#verifyCode");

        if (checkEmail === true) {
            verifyCode.disabled = false;
        } else {
            verifyCode.disabled = true;
        }
    }

    return (
        <>
            {(isSuccess == false) && (
                <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                    <div className="relative self-stretch h-[99px] shrink-0 flex">
                        <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">계정 찾기</div>
                        <div className="absolute left-0 top-[49px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">회원 가입시 입력하신 이메일 주소를 입력하시면,<br /> 해당 이메일로 인증 번호를 보내드립니다.</div>
                    </div>

                    {(verifyCode == '') && (
                        <form onSubmit={handleVerifyCode} id='form' autoComplete='off' className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">이메일 주소</div>
                                <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                                    <input onInput={validateEmail} id='email' placeholder='이메일을 입력해 주세요.' type='email' name='uEmail' onChange={(e) => setValues({ ...values, uEmail: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                                </div>
                                <div id='emailError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">{errorMessage}</div>
                            </div>
                            <button disabled id='verifyCode' type='submit' form='form' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                                <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">인증 번호 발급</div>
                            </button>
                        </form>
                    )}

                    {(verifyCode != '') && (
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">인증 번호</div>
                                <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                                    <input autoComplete='off' id='code' placeholder='인증 번호를 입력해 주세요.' className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                                </div>
                                <div id='codeError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                            </div>
                            <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center">인증 번호는 일시적으로 유효합니다.</div>
                            <button onClick={handleCheckVerifyCode} className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                                <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">인증 번호 확인</div>
                            </button>
                        </div>
                    )}
                </div >
            )}


            {(isSuccess == true) && (
                <div className="absolute left-[394px] top-[146px] w-[651px] flex flex-col items-center justify-start gap-[31px]">
                    <div className="relative self-stretch h-[100px] shrink-0 flex">
                        <div className="absolute left-0 top-0 w-[651px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#0090f9] text-center">{values.uEmail}</div>
                        <div className="absolute left-0 top-[50px] w-[651px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">으로 임시 비밀번호를 발송하였습니다.</div>
                    </div>
                    <div className="w-[631px] h-[50px] text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center flex flex-col justify-center">이메일을 확인 하시고, 비밀번호 변경이 필요하신 경우 프로필에서 변경 가능합니다.<br />*스팸으로 분류되어 있을 수 있습니다. 스팸함도 꼭 확인해 주시기 바랍니다.  </div>
                    <div className="w-[225px] flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <button onClick={indexPage} className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">로그인</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default FindAccount