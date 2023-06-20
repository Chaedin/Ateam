import { useEffect, useState } from "react";

export default function useMyprofile() {
    const [myprofile, setMyprofile] = useState([]); //프로필
    const [loading, setLoading] = useState(true); //로딩
    const [error, setError] = useState(null); //에러

    useEffect(() => {
        fetch(`data/myprofile.json`)
        .then((res) => res.json())
        .then((data) => {
            console.log("fetching data");
            setMyprofile(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
    }, []);//[] - 언제 fetching을 할것인지 [](빈 배열)일 경우 처음 로딩 한번만 실행
    return {myprofile, loading, error};
}