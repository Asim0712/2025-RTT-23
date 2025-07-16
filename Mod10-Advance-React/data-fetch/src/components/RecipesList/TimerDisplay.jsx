import {useState, UseEffect, useEffect} from 'react';

function TimerDisplay (){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    useEffect  (() => {

        // This function is basic ally a timer that updates the time every second- not a feature Generic (setInterval()).
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

//it will prevent memory storage 
         return () => {
    console.log("unsubscribe to the time service")
        clearInterval(intervalId);
}
    }, []);



    return (
        <div>   
            <h2> {time} </h2>
        </div>
    )
}

export default TimerDisplay;