import React from 'react';
import style from './footer.module.css'
import logoImg from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.main__info}>
                <div className={style.footer__section}>
                    <div>
                        <a className={style.logo} href="#!">
                            <img src={logoImg} alt="ByteBox"/>
                            HiBye
                        </a>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className={style.contact__info}>
                <div className={style.bottom__info}>
                    <div className={style.links}>

                    </div>
                </div>

                <div className={style.bottom__info}>
                    <div className={style.links}>

                    </div>
                </div>

                <div className={style.footer__section}>
                    <div>
                        <p className={style.footer__section__title}>Соц.сети</p>
                    </div>
                    <div className={style.links}>
                        <a href='#!'>Inst: @hi.bye</a>
                        <a href='#!'>Inst ceo: @hi.bye</a>
                        <a href='#!'>t.me/hi.bye</a>
                        <a href='#!'>vk.com/hi.bye</a>
                    </div>
                </div>

                <div className={style.footer__section}>
                    <div>
                        <p className={style.footer__section__title}>Что на сайте</p>
                    </div>
                    <div className={style.links}>
                        <a href='#!'>Преимущества</a>
                        <a href='#!'>Сравнение</a>
                        <a href='#!'>Создатели</a>
                        <a href='#!'></a>
                    </div>
                </div>

                <div className={style.footer__section}>
                    <div>
                        <p className={style.footer__section__title}>Сотрудничество</p>
                    </div>
                    <div className={style.links}>
                        <a href='#!'>hi.bye@gmail.com</a>
                        <a href='#!'></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;