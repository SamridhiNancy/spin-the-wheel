import React, { useState } from 'react';
import './App.css';

function App() {
    const [spinning, setSpinning] = useState(false);
    const [degree, setDegree] = useState(0);

    const spinWheel = () => {
        if (spinning) return;

        const newDegree = Math.floor(5000 + Math.random() * 5000);
        setDegree(newDegree);
        setSpinning(true);

        setTimeout(() => {
            setSpinning(false);
        }, 5000); // match this duration with the CSS animation
    };

    return (
        <div className="App">
            <h1>SPIN THE WHEEL</h1>
            <div className="wheel-container">
                <div className={`wheel ${spinning ? 'spinning' : ''}`} style={{ transform: `rotate(${degree}deg)` }}>
                    <img src="/wheel.png" alt="Spin the wheel" />
                </div>
                <button onClick={spinWheel} disabled={spinning}>Spin</button>
            </div>
        </div>
    );
}

export default App;
