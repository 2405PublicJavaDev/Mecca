import { useState, EventHandler, ReactNode, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"

function Ranking() {

    const location = useLocation();

    return (
        <>
            {(!location.pathname.startsWith('/user') && !location.pathname.startsWith('/kakao')) && (
                <div className="absolute left-[75px] top-[104px] w-[200px] flex flex-col items-start justify-start gap-[5px] p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                    <div className="self-stretch text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#000] text-center">Top Players</div>
                    <img width="180" height="0" src="/assets/Index/Bar.png"></img>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">소드마스터</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.9</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대마법사</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.8</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">대지의힘</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.7</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">킹콩</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.5</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                                <img width="20" height="20" src="/assets/Index/Image.png"></img>
                                <div className="text-[14px] leading-[25px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">고수</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-end">
                                <img width="12" height="12" src="/assets/Index/Star.png"></img>
                                <div className="text-[14px] leading-[18px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">4.3</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}

export default Ranking