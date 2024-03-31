import { useEffect, useState } from "react";

export function Counter() {
    const [n, setN] = useState(0);
    useEffect(() => {
        setInterval(() => {
            if (n < 200) {
                setN((n) => n + 1);
            } else {
                setN(1);
            }
        }, 1000)
    }, [n]);
    return <h1>Counter: {n}</h1>
}