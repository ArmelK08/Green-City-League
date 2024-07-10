import React, { useEffect, useRef } from 'react';
import './typeWriter.css';

const typeWriter = ({ toRotate, period, speed = 200, pauseTime = 1000 }) => {
    const el = useRef(null);
    const loopNum = useRef(0);
    const isDeleting = useRef(false);
    const txt = useRef('');

    useEffect(() => {
        const tick = () => {
            const i = loopNum.current % toRotate.length;
            const fullTxt = toRotate[i];

            if (isDeleting.current) {
                txt.current = fullTxt.substring(0, txt.current.length - 1);
            } else {
                txt.current = fullTxt.substring(0, txt.current.length + 1);
            }

            el.current.innerHTML = `<span class="wrap">${txt.current}</span>`;

            let delta = speed - Math.random() * 100;

            if (isDeleting.current) {
                delta /= 2;
            }

            if (!isDeleting.current && txt.current === fullTxt) {
                delta = pauseTime;
                isDeleting.current = true;
            } else if (isDeleting.current && txt.current === '') {
                isDeleting.current = false;
                loopNum.current++;
                delta = 500;
            }

            setTimeout(() => {
                tick();
            }, delta);
        };

        tick();
    }, [toRotate, period, speed, pauseTime]);

    return (
        <span className="typewrite" ref={el}></span>
    );
};

export default typeWriter;
