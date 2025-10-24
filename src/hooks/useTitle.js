// src/hooks/useTitle.js
import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = `${title} - ToyTopia`;
        
        // Cleanup function
        return () => {
            document.title = prevTitle;
        };
    }, [title]);
};

export default useTitle;