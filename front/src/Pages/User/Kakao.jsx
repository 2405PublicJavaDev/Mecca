import { useEffect, useState } from "react"
import axios from "axios"

const KakaoTest = () => {
    const [message, setMessage] = useState();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            axios.post('/api/kakao', { code })
                .then(response => {
                    setMessage(`로그인 성공! ${JSON.stringify(response.data)}`);
                })
                .catch(error => {
                    setMessage(`로그인 실패: ${error.message}`);
                });
        }
    }, []);

    return (
        <div>
            {
                message
            }
        </div>
    )
}

export default KakaoTest;