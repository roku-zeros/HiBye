import React from 'react';
import style from './SellingBlock.module.css';

const SellingBlock = () => {
    return (
        <div className={style.block__image}>
            <div className={style.block__content}>
                <h2>ByteBox— агентство по <br/>аутсорсингу веб-разработки</h2>
                <p>Команда из Москвы, которая станет вашим партнером
                    <br/>на время проекта. Мы не требуем со старта техническое
                    <br/>задание, прописанное до запятых. Вместо этого
                    <br/>слушаем вас и проводим аналитику.</p>
                <button className={style.learn__more__button}>Узнать больше</button>
            </div>
        </div>
    );
};

export default SellingBlock;