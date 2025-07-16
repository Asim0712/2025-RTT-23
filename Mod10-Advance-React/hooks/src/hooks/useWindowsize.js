import { useEffect, useState, use } from 'react';    


function useWindowSize() {

    const {size, setsize} = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setsize({
    height: window.innerHeight,
    width: window.innerWidth  
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run only once on mount
    return size;
}


export default useWindowSize;