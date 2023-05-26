import React from 'react';
import style from './SecondaryServiceCard.module.css';


const SecondaryServiceCard = ({image, title, text }) => {

    const handleMouseMove = (e) => {
        const {currentTarget: target} = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <div className={style.service__card} onMouseMove={handleMouseMove}>
            <div>
                <img className={style.service__card__image} src={image} alt="icon"/>
                <h3 className={style.service__card__title}>
                    {title}
                </h3>
                <p className={style.service__card__text}>
                    {text}
                </p>
            </div>
        </div>
    );
};



export default SecondaryServiceCard;
