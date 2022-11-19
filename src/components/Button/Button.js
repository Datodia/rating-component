import React from 'react'
import styles from './Button.module.css'


export const Button = (props) => {
    return (
        <div >
            <button style={{ background: props.active === props.value ? 'var(--lightGrey)' : null }} onClick={props.onClick} className={styles.button}>{props.value}</button>
        </div>
    )
}
