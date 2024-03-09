import { useEffect, useState } from "react";

export default function useLocalStorage(key, initalState) {
    const [value, setValue] = useState(() => {
        const storValue = localStorage.getItem(key);
        return storValue ? JSON.parse(storValue) : initalState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}