import React from 'react';
import { secondaryitems } from './secondaryitems';
import styles from "./SecondaryServiceCardList.module.css";
import SecondaryServiceCard from "../SecondaryServiceCard/SecondaryServiceCard";

function SecondaryServiceCardList() {
    return (
        <div>
            <div className={styles.card__list}>
                {secondaryitems.map((item, idx) => (
                    <SecondaryServiceCard image={item.img} title={item.title} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default SecondaryServiceCardList;