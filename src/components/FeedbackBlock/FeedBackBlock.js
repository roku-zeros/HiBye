import React from 'react';
import style from './feedbackblock.module.css';

const FeedBackBlock = () => {

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
            <h1>Расскажите о вашей задаче</h1>
            <div className={style.input__form}>
                <input tabIndex='1' placeholder='Имя' name='name' type='text'/>
                <input tabIndex='2' placeholder='+7' name='phone_number' type='tel'/>
                <button type='submit'>Оставить заявку</button>
            </div>
            <p>Гарантируем, что ваши данные не будут переданы третьим лицам</p>
        </div>
    );
};

export default FeedBackBlock;