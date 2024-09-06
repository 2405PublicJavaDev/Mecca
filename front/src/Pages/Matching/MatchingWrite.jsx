import { useState, EventHandler, ReactNode } from 'react'

const MatchingWrite = () => {
    return (
        <>
            <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-end justify-start gap-[31px]">
                <div className="self-stretch text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">함께 즐길수록 재밌는 게임</div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">장르</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">장르를 선택해주세요.</div>
                        </div>
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">장르를 필수로 선택해야 합니다.</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                            <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">태그 -</div>
                            <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#0090f9] whitespace-nowrap">게임 이름을 입력해주세요.</div>
                        </div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">태그를 입력해주세요</div>
                        </div>
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">최소 1개가 필요합니다.</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">티어 또는 레벨</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">레벨 또는 티어를 입력해주세요.</div>
                        </div>
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">최소 5자 이상이어야 합니다.</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">인원</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <div className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#00000040]">인원를 선택해주세요.</div>
                        </div>
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]">인원을 필수로 선택해야 합니다.</div>
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
        </>
    )
}

export default MatchingWrite