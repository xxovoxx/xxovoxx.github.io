import { useState, useEffect } from "react";

const UsePathname = () => {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setPathname(window.location.pathname);
        };

        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    return pathname;
};

export default UsePathname;