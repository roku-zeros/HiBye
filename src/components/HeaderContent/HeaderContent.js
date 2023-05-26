import React from 'react';
import styles from './headercontent.module.css'

const HeaderContent = () => {
    return (
        <div>
            <header>
                <h1>Аутсорс <br/> web-разработка</h1>
                <button className={styles.header__button}>Заказать разработку</button>
                <div className={styles.header__img}></div>
            </header>
        </div>
    );
};

export default HeaderContent;