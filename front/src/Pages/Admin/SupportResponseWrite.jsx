import { useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let checkTitle = false;
let checkContent = false;

const SupportResponseWrite = () => {

    const nav = useNavigate();

    const [values, setValues] = useState({
        srTitle: '',
        srContent: '',
    });

    const handleResponse = async (e) => {
        e.preventDefault();
        await axios.post('/api/admin/response', {
            srTitle: values.srTitle,
            srContent: values.srContent,
        });
        nav("/");
    }



    // 제목 유효성 검사 함수
    const validateTitle = () => {
        checkTitle = false;

        const title = document.querySelector('#title').value;
        const titleError = document.querySelector('#titleError');

        if (title.length < 5) {
            titleError.textContent = '최소 5자 이상 입력하세요.';
        } else {
            titleError.textContent = ''; // 통과
            checkTitle = true
        }

        formButtonCheck();
    }



    // 내용 유효성 검사 함수
    const validateContent = () => {
        checkContent = false;

        const content = document.querySelector('#content').value;
        const contentError = document.querySelector('#contentError');

        if (content.length < 5) {
            contentError.textContent = '최소 5자 이상 입력하세요.';
        } else {
            contentError.textContent = ''; // 통과
            checkContent = true
        }

        formButtonCheck();
    }

    function formButtonCheck() {
        const response = document.querySelector("#response");

        if (checkTitle === true && checkContent === true) {
            response.disabled = false;
        } else {
            response.disabled = true;
        }
    }



    return (
        <>
            <div className="absolute left-[487px] top-[146px] w-[466px] flex flex-col items-end justify-start gap-[31px]">
                <div className="self-stretch text-[32px] leading-[50px] font-['Roboto'] font-bold text-[#000] text-center">답변</div>

                <form onSubmit={handleResponse} id='form' autoComplete='off' className="self-stretch flex flex-col items-center justify-center gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">제목</div>
                        <div className="self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <input onInput={validateTitle} id='title' placeholder='제목을 입력해주세요.' type='text' name='srTitle' onChange={(e) => setValues({ ...values, srTitle: e.target.value })} className="flex-1 text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none"></input>
                        </div>
                        <div id='titleError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000]">내용</div>
                        <div className="self-stretch h-[300px] shrink-0 flex flex-row items-start justify-start p-[10px] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                            <textarea onInput={validateContent} id='content' placeholder='내용을 입력해주세요.' type='text' name='srContent' onChange={(e) => setValues({ ...values, srContent: e.target.value })} className="flex-1 self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#000] outline-none resize-none"></textarea>
                        </div>
                        <div id='contentError' className="self-stretch text-[16px] leading-[25px] font-['Roboto'] text-[#f00]"></div>
                    </div>
                </form>

                <button disabled id='response' type='submit' form='form' className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[10px]">
                    <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] whitespace-nowrap">등록</div>
                </button>
            </div>
        </>
    )
}

export default SupportResponseWrite