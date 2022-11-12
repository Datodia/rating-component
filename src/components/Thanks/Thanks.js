import React from 'react'
import { Text } from '../Text/Text'
import styles from './Thanks.module.css'

export const Thanks = (props) => {
    return (
        <div className={styles.wrapper}>
            <img style={{ marginTop: '34px' }} src='assets/thanks.svg' />
            <div className={styles.rate}>You selected {props.rate} out of 5</div>
            <Text
                style={{ textAlign: 'center', }}
                title={'Thank you!'}
                desc={'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'} />
        </div >
    )
}
