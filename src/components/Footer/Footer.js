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
                            ByteBox
                        </a>
                    </div>
                    <div>
                        <p>ИП ByteBox</p>
                        <p>ИНН: 122343445454767</p>
                        <p>г.Москва</p>
                    </div>
                </div>
            </div>

            <div className={style.contact__info}>
                <div className={style.bottom__info}>
                    <div className={style.links}>
                        <a href="#!">Политика конфиденциальности</a>
                    </div>
                </div>

                <div className={style.bottom__info}>
                    <div className={style.links}>
                        <a href="#!">Договор оферты</a>
                    </div>
                </div>

                <div className={style.footer__section}>
                    <div>
                        <p className={style.footer__section__title}>Соц.сети</p>
                    </div>
                    <div className={style.links}>
                        <a href='#!'>Inst: @byte.box</a>
                        <a href='#!'>Inst ceo: @byte.box</a>
                        <a href='#!'>t.me/byte.box</a>
                        <a href='#!'>vk.com/byte.box</a>
                    </div>
                </div>

                <div className={style.footer__section}>
                    <div>
                        <p className={style.footer__section__title}>Что на сайте</p>
                    </div>
                    <div className={style.links}>
                        <a href='#!'>Услуги</a>
                        <a href='#!'>Технологии</a>
                        <a href='#!'>Решаем проблемы</a>
                        <a href='#!'>Контакты</a>
                    </div>
                </div>

                <div className={style.footer__section}>
                    <div>
                        <p className={style.footer__section__title}>Сотрудничество</p>
                    </div>
                    <div className={style.links}>
                        <a href='#!'>soft.box@gmail.com</a>
                        <a href='#!'>+777 666 777 66 66</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;