import React from 'react'
import styles from './Text.module.css'

export const Text = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 style={props.style} className={styles.title}>{props.title}</h1>
            <p style={props.style} className={styles.desc}>{props.desc}</p>
        </div>
    )
}
