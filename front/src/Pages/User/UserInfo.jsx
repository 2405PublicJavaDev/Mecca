import { useState, EventHandler, ReactNode } from 'react'

const UserInfo = () => {
    return (
        <>
            <div className="absolute left-[431px] top-[333px] w-[578px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                        <div className="flex-1 text-[16px] leading-[24px] font-['Roboto'] text-[#000]">글 제목</div>
                        <div className="flex flex-row items-center justify-end gap-[7px]">
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="/assets/Index/View.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="/assets/Index/Comment.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[1px]">
                                <img width="14" height="14" src="/assets/Index/ThumbsUp.png"></img>
                                <div className="text-[16px] leading-[18px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                </div>
            </div>
            <div className="absolute left-[431px] top-[146px] w-[578px] flex flex-col items-start justify-start gap-[20px] py-[20px] px-0 bg-[#00000000] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[20px] py-0 px-[20px]">
                    <img width="65" height="65" src="/assets/Index/Image.png"></img>
                    <div className="text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] whitespace-nowrap">소드마스터</div>
                    <div className="self-stretch flex flex-row items-center justify-end">
                        <img width="32" height="32" src="/assets/Index/Star.png"></img>
                        <div className="text-[32px] leading-[50px] font-['Roboto'] text-[#000] text-right whitespace-nowrap">1000</div>
                    </div>
                </div>
                <div className="self-stretch h-0 shrink-0 border-[1px] border-solid border-[#00000080]"></div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[20px] py-0 px-[20px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#0090f9] whitespace-nowrap">자유</div>
                    <div className="text-[20px] leading-[20px] font-['Roboto'] text-[#00000080] whitespace-nowrap">매칭</div>
                </div>
            </div>
        </>
    )
}

export default UserInfo