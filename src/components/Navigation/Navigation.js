import React from 'react';
import styles from './navigation.module.css'
import logoImg from '../../assets/images/logo.svg'

function Navigation() {
    return (
        <div className={styles.navigation}>
            <a className={styles.navigation__logo} href="#!">
                <img src={logoImg} alt="ByteBox"/>
                HiBye
            </a>
            <div className={styles.navigation__links}>
                <button className={styles.navigation__link} href="#!">Главная</button>
                <button className={styles.navigation__link} href="#!">Услуги</button>
                <button className={styles.navigation__link} href="#!">Технологии</button>
                <button className={styles.navigation__link} href="#!">Контакты</button>
            </div>

        </div>
    )
}

export default Navigation;