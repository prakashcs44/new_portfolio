import { useEffect, useState } from 'react';

function useCurrentHref() {
    const [currentHref, setCurrentHref] = useState(window.location.href.split("#")[1]);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentHref(window.location.href.split("#")[1]);
        };

        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    return currentHref;
}

export default useCurrentHref;