import React from 'react'
import styles from './Text.module.css'

export const Text = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.desc}>{props.desc}</p>
        </div>
    )
}
