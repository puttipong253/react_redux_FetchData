import { useState, useEffect } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function FetchUrl() {
        // ดึงข้อมูลจาก api
        const response = await fetch(`https://api.github.com/users`);

        // ให้ข้อมูลอยู๋ในรูปแบบ json
        const json = await response.json();

        // เก็บข้อมูลไว้ใน data
        setData(json);
        
        setLoading(false);
    }

    useEffect(() => {
        FetchUrl();
    }, []);

    return [data, loading];
}
