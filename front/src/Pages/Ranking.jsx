import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom';

function Ranking() {

    const nav = useNavigate();
    const location = useLocation();

    const [rankingList, setRankingList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const rankingResponse = await axios.get('/api/rating/rank');
            setRankingList(rankingResponse.data);
        }

        fetchData();
    }, []);

    const userInfoPage = () => {
        nav("/user/info");
    }



    return (
        <>
            {(!location.pathname.startsWith('/user') && !location.pathname.startsWith('/kakao') && location.pathname != '/general/write' && location.pathname != '/matching/write' && location.pathname != '/announce/write' && location.pathname != '/support/write') && (
                <div className="absolute left-[75px] top-[104px] w-[200px] flex flex-col items-start justify-start gap-[5px] p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="self-stretch text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#000] text-center">Top Players</div>
                    <img width="180" height="0" src="/assets/Index/Bar.png"></img>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
                        {rankingList.length > 0 ? (
                            rankingList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-row items-center justify-between">
                                    <button onClick={userInfoPage} className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                        <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                        <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">{item.U_NICKNAME}</div>
                                    </button>
                                    <div className="self-stretch flex flex-row items-center justify-end">
                                        <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                        <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">{item.U_STAR}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>유저가 없습니다.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    )

}

export default Ranking