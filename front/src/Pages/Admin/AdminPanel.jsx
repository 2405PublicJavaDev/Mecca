import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

    const nav = useNavigate();

    const [reportList, setReportList] = useState([]);
    const [supportList, setSupportList] = useState([]);
    const [status, setStatus] = useState('관리자');

    useEffect(() => {
        async function fetchData() {
            // const reportResponse = await axios.get('/api/report/list');
            // setReportList(reportResponse.data);

            const supportResponse = await axios.get('/api/support/list');
            console.log(supportResponse.data);
            setSupportList(supportResponse.data);
        }

        fetchData();
    }, []);

    const userInfoPage = () => {
        nav("/user/info");
    }

    const handleReport = () => {
        setStatus('신고');
    }

    const handleSupport = () => {
        setStatus('문의');
    }

    return (
        <>
            <div className="absolute left-[310px] top-[214px] w-[830px] flex flex-col items-start justify-start gap-[20px]">
                <div
                    className="self-stretch flex flex-row items-center justify-start p-[30px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="relative flex-1 h-[50px] flex">
                        <div className="absolute left-0 top-0 w-[770px] text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000]">{status}</div>
                    </div>
                </div>
                <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[50px]">
                        <button onClick={handleReport} className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] whitespace-nowrap">신고</button>
                        <button onClick={handleSupport} className="text-[20px] leading-[20px] font-['Roboto'] text-[#000] whitespace-nowrap">1:1 문의</button>
                    </div>
                </div>
                {status == '신고' && (
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        {reportList.length > 0 ? (
                            reportList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                                        <button onClick={userInfoPage} className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                            <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">닉네임</div>
                                        </button>
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                                        <div className="self-stretch flex flex-row items-center justify-end">
                                            <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">0</div>
                                        </div>
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">1일 전</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start">
                                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                                    </div>
                                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                                </div>
                            ))
                        ) : (
                            <p>게시물이 없습니다.</p>
                        )}
                    </div>
                )}
                {status == '문의' && (
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        {supportList.length > 0 ? (
                            supportList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                                        <button onClick={userInfoPage} className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                            <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                            <div className="text-[14px] leading-[12px] font-['Roboto'] text-[#000] whitespace-nowrap">{item.U_NICKNAME}</div>
                                        </button>
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                                        <div className="self-stretch flex flex-row items-center justify-end">
                                            <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                            <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">{item.U_STAR}</div>
                                        </div>
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">&nbsp;•&nbsp;</div>
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">{item.S_CREATED_DATE}</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start">
                                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">{item.S_TITLE}</div>
                                    </div>
                                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                                </div>
                            ))
                        ) : (
                            <p>게시물이 없습니다.</p>
                        )}
                    </div>
                )}
            </div >
        </>
    )
}

export default AdminPanel