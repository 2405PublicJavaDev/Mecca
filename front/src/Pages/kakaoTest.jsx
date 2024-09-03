import { useEffect, useState } from "react"
import axios from "axios"

const KakaoTest = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        async function getUser() {
            const response = await axios.get(`/kakao`);
            const data = response.data;

            setUser(data);
        }

        getUser();
    }, []);

    return (
        <div>
            {
                <h1>{user}</h1>
                // users ? users.map((user) =>
                //     <div key={user.id}>
                //         <h3>{user.name} {user.age}</h3>
                //         <p>{user.introduce}</p>
                //     </div>
                // ) : null
            }
        </div>
    )
}

export default KakaoTest;