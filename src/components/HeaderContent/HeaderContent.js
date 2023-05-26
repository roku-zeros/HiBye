import React from 'react';
import styles from './headercontent.module.css'

const HeaderContent = () => {
    return (
        <div>
            <header>
                <h1>HiBye -<br/> знакомства на мероприятиях</h1>
                <button className={styles.header__button}>Узнать больше</button>
                <div className={styles.header__img}>
                    <div className={styles.pink}></div>
                    <div className={styles.purple}></div>
                    <div className={styles.red}></div>
                    <div className={styles.orange}></div>
                    <div className={styles.blue}></div>
                </div>
            </header>
        </div>
    );
};

export default HeaderContent;