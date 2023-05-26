import React from 'react';
import style from './wideblock.module.css'

const WideBlock = ({card_title, first_title, first_text, second_title, second_text, third_title, third_text}) => {

    const handleMouseMove = (e) => {
        const {currentTarget: target} = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <div className={style.block} onMouseMove={handleMouseMove}>
            <h2>{card_title}</h2>
            <div className={style.block__sections}>
                <div className={style.block__section}>
                    <div className={style.block__section__title}>
                        <h1>01</h1>
                        <h3>{first_title}</h3>
                    </div>
                    <p>{first_text}</p>
                </div>
                <div className={style.block__section}>
                    <div className={style.block__section__title}>
                        <h1>02</h1>
                        <h3>{second_title}</h3>
                    </div>
                    <p>{second_text}</p>
                </div>
                <div className={style.block__section}>
                    <div className={style.block__section__title}>
                        <h1>03</h1>
                        <h3>{third_title}</h3>
                    </div>
                    <p>{third_text}</p>
                </div>
            </div>
        </div>
    );
};

export default WideBlock;