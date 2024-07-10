import React, { useEffect, useRef } from 'react';
import TypewriterEffect from '../typeWriter/TypeWriter';
import './heroText.css';
import Arrow from '../arrow/Arrow';

function HeroText() {
    const canvasRef = useRef(null);
    const toRotate=["Bienvenue à la", "Welcome to the.","Bienvenida a la.", "E yōkoso.", "欢迎来到."];
    const period = 20000;
    const speed =200; 
    const pauseTime = 6500;

    useEffect(() => {
        const canvasHidden = document.createElement('canvas');
        const ctxHidden = canvasHidden.getContext('2d');
        const canvasShown = canvasRef.current;
        canvasShown.width = 1500;
        canvasShown.height = 300;
        const ctxShown = canvasShown.getContext('2d');

        function init() {
            canvasHidden.width = 1500;
            canvasHidden.height = 300;

            ctxHidden.clearRect(0, 0, canvasHidden.width, canvasHidden.height);
            ctxHidden.textAlign = 'center';
            ctxHidden.textBaseline = 'middle';
            ctxHidden.font = 'bold 100px VT323, Audiowide';
            ctxHidden.fillStyle = '#0B6E4F';

            ctxHidden.fillText('GREEN CITY LEAGUE', canvasHidden.width / 2, canvasHidden.height / 2);

            ctxShown.clearRect(0, 0, canvasShown.width, canvasShown.height);
            ctxShown.drawImage(canvasHidden, 0, 0);
            var i = 10; while (i--) { glitch(); }
        }

        function glitch() {
            const width = 100 + Math.random() * 100;
            const height = 50 + Math.random() * 50;

            const x = Math.random() * canvasHidden.width;
            const y = Math.random() * canvasHidden.height;

            const dx = x + (Math.random() * 40 - 20);
            const dy = y + (Math.random() * 30 - 15);

            ctxShown.clearRect(x, y, width, height);
            ctxShown.fillStyle = '#4a6';
            ctxShown.drawImage(canvasHidden, x, y, width, height, dx, dy, width, height);
        }

        const interval = setInterval(init, 1000 / 15);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero-t'>
      <TypewriterEffect toRotate={toRotate} period={period} speed={speed} pauseTime={pauseTime}/>

            <canvas ref={canvasRef}></canvas>
            <Arrow/>
        </div>
    );
}

export default HeroText;
