import React, { useState } from 'react';

function Button() {
    const [subscribe, setSubscribe] = useState(false);
    const [adder, setAdder] = useState(0);

    const handleSubscribe = () => {
        setSubscribe(true);
    };

    const handleAdd = () => {
        setAdder(prevAdder => prevAdder + 1);
    };

    return (
        <div>
            <p>Adder now: {adder}</p>

            <button onClick={handleSubscribe}>
                {subscribe ? 'Subscribed' : 'Subscribe'}
            </button>
            
            <button onClick={handleAdd}>Add</button>

            {subscribe ? (
                <div>Thank you for subscribing</div>
            ) : (
                <div>Subscribe to our channel</div>
            )}

           
        </div>
    );
}

export default Button;
