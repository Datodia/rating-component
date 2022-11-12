import React from 'react'
import styles from './Button.module.css'


export const Button = (props) => {
    return (
        <div >
            <button onClick={props.onClick} className={styles.button}>{props.value}</button>
        </div>
    )
}
