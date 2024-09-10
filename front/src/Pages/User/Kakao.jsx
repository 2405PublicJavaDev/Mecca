import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let checkNickname = false;

const Kakao = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        uEmail: '',
        uNickname: '',
    });

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            axios.post('/api/kakao', { code })
                .then(response => {
                    if (response.data.unickname != null) {
                        window.location.href = "/";
                    } else {
                        setValues({ uEmail: response.data.uemail });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

        const handlePopState = (event) => {
            // 브라우저 뒤로가기를 눌렀을 때 리다이렉트
            window.history.pushState(null, '', window.location.href);  // 현재 페이지로 다시 push
            event.preventDefault();  // 기본 동작 방지
        };

        // 페이지가 로드될 때 상태 저장
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };

        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';  // 경고 메시지를 띄워서 새로고침 방지
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [nav]);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/user/signup', {
            uEmail: values.uEmail,
            uNickname: values.uNickname,
        });
        if (response.data == '') {
            nav('/user/signin');
        } else {
            document.querySelector("#signUp").disabled = true;
            if (response.data.unickname == document.querySelector("#nickname").value) {
                document.querySelector("#nicknameError").textContent = "이미 존재하는 닉네임입니다."
                checkNickname = false;
            }
        }
    }



    // 닉네임 유효성 검사 함수
    const validateNickname = () => {
        checkNickname = false;

        const nickname = document.getElementById('nickname').value.trim();
        const nicknameError = document.getElementById('nicknameError');

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

    function formButtonCheck() {
        const signUp = document.querySelector("#signUp");

        if (checkNickname === true) {
            signUp.disabled = false;
        } else {
            signUp.disabled = true;
        }
    }



    return (
        <>
            <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                <div className="relative self-stretch h-[75px] shrink-0 flex">
                    <div className="absolute left-0 top-[50px] w-[466px] text-[16px] leading-[25px] font-['Roboto'] font-bold text-[#00000080] text-center">MeCCa는 게이머들을 위한 매칭 플랫폼입니다.</div>
                    <div className="absolute left-0 top-0 w-[466px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">KAKAO 계정을 이용한 회원가입</div>
                </div>
                <form onSubmit={handleSignUp} id='form' autoComplete='off' className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">닉네임</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validateNickname} id='nickname' placeholder='닉네임을 입력해 주세요.' type='text' name='uNickname' onChange={(e) => setValues({ ...values, uNickname: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='nicknameError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                </form>
                <button disabled id='signUp' type='submit' form='form' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                </button>
            </div>
        </>
    )
}

export default Kakao
