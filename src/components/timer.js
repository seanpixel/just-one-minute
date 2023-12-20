import React, { useState, useEffect } from 'react';
import ReloadButton from './reload';

function Timer({startFlag}) {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let timer;
        if (startFlag && seconds > 0) {
            timer = setTimeout(() => setSeconds(seconds - 1), 1000);
        }

        return () => clearTimeout(timer);

    }, [seconds, startFlag]);

    return (
        <div className='timer'>
            <h1>Timer: {seconds} Seconds</h1>
            {seconds === 0 && <h2>good job!</h2> && <ReloadButton />}
            
        </div>
    );
}

export default Timer;
