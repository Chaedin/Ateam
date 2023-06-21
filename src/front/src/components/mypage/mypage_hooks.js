import axios from "axios";
import { useEffect, useState } from "react";

export default function useMyprofile() {
    const [myprofile, setMyprofile] = useState([]); //프로필
    const [loading, setLoading] = useState(true); //로딩
    const [error, setError] = useState(null); //에러

    useEffect(() => {
        axios.get('http://localhost:8080/mypage/profile')
            .then(response => {
                setMyprofile(response.data.myprofile);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);//[] - 언제 fetching을 할것인지 [](빈 배열)일 경우 처음 로딩 한번만 실행
    return { myprofile, loading, error };
}