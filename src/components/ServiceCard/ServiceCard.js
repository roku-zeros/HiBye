import React from 'react';
import style from './ServiceCard.module.css';


const ServiceCard = ({title, text }) => {
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
                <h3 className={style.service__card__title}>
                    {title}
                </h3>
                <p className={style.service__card__text}>
                    {text}
                </p>
            </div>
            <a className={style.learn__more}>Узнать подробнее</a>
        </div>
    )
}



export default ServiceCard;
