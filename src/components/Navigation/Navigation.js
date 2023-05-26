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
                <button className={styles.navigation__link} href="#!">Преимущества</button>
                <button className={styles.navigation__link} href="#!">Сравнение</button>
                <button className={styles.navigation__link} href="#!">Создатели</button>
            </div>

        </div>
    )
}

export default Navigation;