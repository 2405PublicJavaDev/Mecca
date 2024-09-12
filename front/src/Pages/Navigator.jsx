import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom';

import { UserContext } from '../UserContext';

function Navigator() {

    const nav = useNavigate();
    const location = useLocation();

    const { uEmail } = useContext(UserContext);

    const indexPage = () => {
        nav("/");
    }

    const generalPage = () => {
        nav("/general/list");
    }
    const matchingPage = () => {
        nav("/matching/list");
    }
    const announcePage = () => {
        nav("/announce/list");
    }
    const supportPage = () => {
        nav("/support/write");
    }

    const signInPage = () => {
        nav("/user/signin");
    }
    const signUpPage = () => {
        nav("/user/signup");
    }



    const [toggle, setToggle] = useState({
        chat: false,
        notification: false,
        image: false,
    });

    useEffect(() => {
        setToggle({
            chat: false,
            notification: false,
            image: false,
        });
    }, [location]);

    const handleButtonClick = (e) => {
        const name = e.currentTarget.name;
        setToggle({ ...toggle, [name]: !toggle[name] });
    }

    const handleAdminPage = () => {
        nav("/admin");
    }
    const handleMyPage = () => {
        nav("/user/mypage");
    }
    const handleActivity = () => {
        nav("/user/info");
    }
    const handleSignOut = async () => {
        await axios.get('/api/user/signout');
        window.location.href = "/";
    }



    return (
        <nav className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border"></div>

            <button onClick={indexPage} className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</button>

            {(!location.pathname.startsWith('/user') && !location.pathname.startsWith('/kakao') && location.pathname != '/support/write') && (
                <div className="absolute left-[305px] top-[25px] flex flex-row items-center justify-start gap-[30px]">
                    <button onClick={generalPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">자유</button>
                    <button onClick={matchingPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">매칭</button>
                    <button onClick={announcePage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">공지사항</button>
                    <button onClick={supportPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">1:1 문의</button>
                </div>
            )}

            {(location.pathname != '/' && !location.pathname.startsWith('/user') && !location.pathname.startsWith('/kakao') && location.pathname != '/report/write' && location.pathname != '/general/write' && location.pathname != '/matching/write' && location.pathname != '/announce/write' && location.pathname != '/support/write') && (
                <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+306px)] top-1/2 w-[218px] flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                    <img width="24" height="24" src="/assets/Index/Icon.png"></img>
                    <input type='text' placeholder='검색' className="flex-1 text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#000] outline-none bg-transparent"></input>
                </div>
            )}

            {(uEmail == null) && (
                <div className="absolute left-[1145px] top-[13px] flex flex-row items-center justify-start gap-[20px]">
                    <button onClick={signInPage} className="flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                        <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">로그인</div>
                    </button>
                    <button onClick={signUpPage} className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[30px]">
                        <div className="text-[16px] leading-[25px] font-['Roboto'] font-semibold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                    </button>
                </div>
            )}

            {(uEmail != null && location.pathname != '/user/changepassword' && location.pathname != '/user/delete' && location.pathname != '/support/write') && (
                <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                    <button onClick={handleButtonClick} name='chat'>
                        <img width="35" height="35" src="/assets/Index/Chat.png"></img>
                    </button>
                    <button onClick={handleButtonClick} name='notification'>
                        <img width="35" height="35" src="/assets/Index/Notification.png"></img>
                    </button>
                    <button onClick={handleButtonClick} name='image'>
                        <img width="35" height="35" src="/assets/Index/Image.png"></img>
                    </button>
                </div>
            )}

            {(toggle.notification) && (
                <div className="absolute -translate-y-1/2 left-[1235px] top-[115px] flex flex-row items-center justify-start gap-[7px]">
                    <div className="flex flex-col items-start justify-center gap-[5px] p-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img width="20" height="20" src="/assets/Index/Image.png"></img>
                            <div className="w-[28px] h-[21px] text-[10px] leading-[18px] font-['Roboto'] text-[#000] flex flex-col justify-center">닉네임</div>
                            <div className="flex flex-row items-center justify-start gap-[3px]">
                                <div className="w-[34px] h-[20px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] border-[1px] border-solid border-[#0090f980] rounded-[10px]">
                                    <div className="text-[10px] leading-[25px] font-['Roboto'] font-semibold text-[#fff] whitespace-nowrap">수락</div>
                                </div>
                                <div className="w-[34px] h-[20px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[10px]">
                                    <div className="text-[10px] leading-[25px] font-['Roboto'] font-medium text-[#000] whitespace-nowrap">거절</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {(toggle.image && uEmail != 'mecca@gmail.com') && (
                <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                    <div className="flex flex-col items-start justify-center gap-[10px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <button onClick={handleMyPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">프로필</button>
                        <button onClick={handleActivity} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">활동내역</button>
                        <button onClick={handleSignOut} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">로그아웃</button>
                    </div>
                </div>
            )}

            {(toggle.image && uEmail == 'mecca@gmail.com') && (
                <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                    <div className="flex flex-col items-start justify-center gap-[10px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <button onClick={handleAdminPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">관리</button>
                        <button onClick={handleSignOut} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">로그아웃</button>
                    </div>
                </div>
            )}

        </nav>
    );
}

export default Navigator;