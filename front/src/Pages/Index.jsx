import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Index = () => {

    const nav = useNavigate();

    const [generalList, setGeneralList] = useState([]);
    const [matchingList, setMatchingList] = useState([]);
    const [bestGeneralList, setBestGeneralList] = useState([]);
    const [announceList, setAnnounceList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const generalResponse = await axios.get('/api/index/general');
            setGeneralList(generalResponse.data);

            const matchingResponse = await axios.get('/api/index/matching');
            setMatchingList(matchingResponse.data);

            const bestGeneralResponse = await axios.get('/api/index/best');
            setBestGeneralList(bestGeneralResponse.data);

            const announceResponse = await axios.get('/api/index/announce');
            setAnnounceList(announceResponse.data);
        }

        fetchData();
    }, []);

    const userInfoPage = () => {
        nav("/user/info");
    }



    return (
        <>
            <div className="absolute left-[305px] top-[214px] w-[830px] flex flex-wrap items-start justify-start gap-[30px]">
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">자유</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        {generalList.length > 0 ? (
                            generalList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-center justify-start">
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
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">{item.G_CREATED_DATE}</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">{item.G_TITLE}</div>
                                        <div className="flex flex-row items-center justify-end gap-[7px]">
                                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                                <img width="14" height="14" src="/assets/Index/View.png"></img>
                                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.G_VIEW}</div>
                                            </div>
                                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                                <img width="14" height="14" src="/assets/Index/Comment.png"></img>
                                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.GC_COUNT}</div>
                                            </div>
                                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                                <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.G_LIKE}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                                </div>
                            ))
                        ) : (
                            <p>게시물이 없습니다.</p>
                        )}
                    </div>
                </div>
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">매칭</div>
                    </div>
                    <div className="w-[400px] flex flex-col items-start justify-start gap-[5px]">
                        {matchingList.length > 0 ? (
                            matchingList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-center justify-start">
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
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">{item.M_CREATED_DATE}</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">[{item.M_GENRE}] - {item.M_TAG} ({item.M_TIER_OR_LEVEL})</div>
                                        <div className="flex flex-row items-center justify-end gap-[1px]">
                                            <img width="14" height="14" src="/assets/Index/Party.png"></img>
                                            <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.M_CURRENT_PARTY}/{item.M_MAX_PARTY}</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                                </div>
                            ))
                        ) : (
                            <p>게시물이 없습니다.</p>
                        )}
                    </div>
                </div>
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">BEST of 자유</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        {bestGeneralList.length > 0 ? (
                            bestGeneralList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-center justify-start">
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
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">{item.G_CREATED_DATE}</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">{item.G_TITLE}</div>
                                        <div className="flex flex-row items-center justify-end gap-[7px]">
                                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                                <img width="14" height="14" src="/assets/Index/View.png"></img>
                                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.G_VIEW}</div>
                                            </div>
                                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                                <img width="14" height="14" src="/assets/Index/Comment.png"></img>
                                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.GC_COUNT}</div>
                                            </div>
                                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                                <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">{item.G_LIKE}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                                </div>
                            ))
                        ) : (
                            <p>게시물이 없습니다.</p>
                        )}
                    </div>
                </div>
                <div className="w-[400px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch h-[50px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">공지사항</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        {announceList.length > 0 ? (
                            announceList.map((item, index) => (
                                <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-center justify-start">
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
                                        <div className="text-[14px] leading-[24px] font-['Roboto'] text-[#000] whitespace-nowrap">{item.A_CREATED_DATE}</div>
                                    </div>
                                    <div className="self-stretch text-[16px] leading-[24px] font-['Roboto'] text-[#000]">{item.A_TITLE}</div>
                                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                                </div>
                            ))
                        ) : (
                            <p>게시물이 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index