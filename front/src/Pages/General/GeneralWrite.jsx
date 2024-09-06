import { useState, EventHandler, ReactNode } from 'react'

const GeneralWrite = () => {
    return (<div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-end justify-start gap-[31px]">
            <div className="self-stretch text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">함께 할 때 더 즐거운 순간</div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">제목</div>
                    <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">제목을 입력해주세요.</div>
                    </div>
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">최소 5자 이상이어야 합니다.</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">내용</div>
                    <div className="self-stretch h-[300px] shrink-0 flex flex-row items-start justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">내용을 입력해주세요.</div>
                    </div>
                    <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">최소 5자 이상이어야 합니다.</div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[10px]">
                <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">등록</div>
            </div>
        </div>
        <div className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border-#00000080 border"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+306px)] top-1/2 w-[218px] flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                <img width="24" height="24" src="Icon393_351.png"></img>
                <div className="flex-1 text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#00000040]">검색</div>
            </div>
            <div className="absolute left-[305px] top-[25px] flex flex-row items-center justify-start gap-[30px]">
                <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">자유</div>
                <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">매칭</div>
                <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">공지사항</div>
            </div>
            <div className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</div>
            <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                <img width="35" height="35" src="Chat393_359.png"></img>
                <img width="35" height="35" src="Notification393_360.png"></img>
                <div className="w-[35px] h-[35px] shrink-0 bg-[#d9d9d9] rounded-full"></div>
            </div>
        </div>
    </div>)
}

export default GeneralWrite