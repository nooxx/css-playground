import {useEffect, useState} from 'react'

type dimension = {
    width: number | undefined,
    height: number | undefined,
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<dimension>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}