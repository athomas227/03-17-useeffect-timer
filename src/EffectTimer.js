import React, { useState, useEffect } from 'react';

function EffectTimer() {
    const [seconds, setSeconds] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            <h1>Time: {seconds} seconds</h1>
        </div>
    )

}

export default EffectTimer;