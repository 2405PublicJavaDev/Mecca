import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

let checkNickname = true;

const Mypage = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        uNickname: '',
        oNickname: '',
        uIntroduce: '',
        oIntroduce: '',
        isKakao: false,
    });

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/user/update');
            const isKakao = response.data.upassword == null;
            setValues({
                uNickname: response.data.unickname,
                oNickname: response.data.unickname,
                uIntroduce: response.data.uintroduce || '',
                oIntroduce: response.data.uintroduce || '',
                isKakao,
            });
        }

        fetchData();
    }, []);

    const handleMyPage = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/user/update', {
            uNickname: values.uNickname,
            uIntroduce: values.uIntroduce,
        });
        if (response.data == '') {
            window.location.href = '/user/mypage';
        } else {
            document.querySelector('#save').disabled = true;
            if (response.data.unickname == document.querySelector('#nickname').value) {
                document.querySelector('#nicknameError').textContent = '이미 존재하는 닉네임입니다.'
                checkNickname = false;
            }
        }
    }



    const passwordChangePage = () => {
        nav('/user/changepassword');
    }

    const deletePage = () => {
        nav('/user/delete');
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

    function formButtonCheck() {
        const save = document.querySelector('#save');
        const nickname = document.querySelector('#nickname');
        const introduce = document.querySelector('#introduce');

        if (checkNickname === true && (nickname.value != values.oNickname || introduce.value != values.oIntroduce)) {
            save.disabled = false;
        } else {
            save.disabled = true;
        }
    }



    return (
        <>
            <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-start justify-start gap-[31px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] whitespace-nowrap">회원정보</div>
                    <div className="w-[100px] h-[100px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
                </div>
                <form onSubmit={handleMyPage} id='form' autoComplete='off' className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">닉네임</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validateNickname} id='nickname' placeholder='닉네임을 입력해주세요.' value={values.uNickname} type='text' name='uNickname' onChange={(e) => setValues({ ...values, uNickname: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='nicknameError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">한 줄 소개</div>
                        <div className="self-stretch h-[287px] shrink-0 flex flex-row items-start justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <textarea onInput={formButtonCheck} id='introduce' placeholder='나를 소개해 주세요.' value={values.uIntroduce} name='uIntroduce' onChange={(e) => setValues({ ...values, uIntroduce: e.target.value })} className="flex-1 self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none resize-none"></textarea>
                        </div>
                    </div>
                </form >
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                    {/* 
                        저장
                    */}
                    <button disabled id='save' type='submit' form='form' className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">저장</div>
                    </button>
                    {(!values.isKakao) && (
                        <button onClick={passwordChangePage} className="self-stretch flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">비밀번호 변경</div>
                        </button>
                    )}
                    <button onClick={deletePage} className="self-stretch flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">회원 탈퇴</div>
                    </button>
                </div>
            </div >
        </>
    )
}

export default Mypage