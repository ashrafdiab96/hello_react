import React from 'react'
import styles from './CardData.module.css';

const CardData = (props) => {
    const cards = props.dataList.map((card, index) => (
        <div className={styles.cardWeapper} key={index} style={{ backgroundColor: props.type === "m" ? "yellowgreen" : "pink" }}>
            <div>Name: {card.name}</div>
            <div>Phone: {card.phone}</div>
            <div>Age: {card.age}</div>
            <div>Job: {card.job}</div>
            <div>Address: {card.address}</div>
            <div className={styles.delBtn}>X</div>
        </div>
    ));

    return (
        <div>{cards}</div>
    );
}

export default CardData;
