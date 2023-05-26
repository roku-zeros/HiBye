import React from 'react';
import { items } from './items';
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServiceCardList.module.css";

function ServiceCardList() {
    return (
        <div>
            <div className={styles.card__list}>
                {items.map((item, idx) => (
                    <ServiceCard image={item.img} title={item.title} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default ServiceCardList;