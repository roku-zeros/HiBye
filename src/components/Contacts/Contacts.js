import React from 'react';
import style from './contacts.module.css';
import whatsapp from './icons/socialswhatsapp.svg';
import behance from './icons/socialsbehanse.svg';
import google from './icons/socialsgoogle.svg';
import instagram from './icons/socialsinstagram.svg';
import telegram from './icons/socialstelegram.svg';
import vk from './icons/socialsvk.svg';

const Contacts = () => {

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
            <h2>Создатели проекта</h2>
            <div className={style.horizontal}>
                <div className={style.contacts__block}>
                    <p>Сотрудник</p>
                    <a href='#!'>
                        Лосюков А.В.
                    </a>
                    <a href='#!'>
                        Валов Т.А.
                    </a>
                    <a href='#!'>
                        Кулаков А.А.
                    </a>
                    <a href='#!'>
                        Цуканов Н.С.
                    </a>
                    <a href='#!'>
                        Плешакова Е.А.
                    </a>
                </div>

                <div className={style.contacts__block}>
                    <p>Роль в проекте</p>
                    <a href='#!'>
                        Flutter - разработчик
                    </a>
                    <a href="#!">
                        Дизайнер
                    </a>
                    <a href="#!">
                        Java- разработчик
                    </a>
                    <a href="#!">
                        Продакт - менеджер
                    </a>
                    <a href="#!">
                        Разработка фин модели
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;