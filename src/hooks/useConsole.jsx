import { useEffect } from "react";

export const useConsole = () => {
    const o = {message:''};
    useEffect(() => {
        console.log(o.message);
    }, [o.message])

    return o;
}