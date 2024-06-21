import React, { useState } from 'react';
import './App.css';
import { ReactComponent as Wheel } from './spin-the-wheel.svg'; // Ensure the file name matches

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
            <div className="wheel-container">
                <div className={`wheel ${spinning ? 'spinning' : ''}`} style={{ transform: `rotate(${degree}deg)` }}>
                    <Wheel className="wheel-svg" />
                    <button className="spin-button" onClick={spinWheel} disabled={spinning}>
                        <img src="/spin-icon.svg" alt="Spin" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
