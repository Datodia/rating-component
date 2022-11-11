import React from 'react'
import { Button } from '../Button/Button'
import { Star } from '../Star/Star'
import { Text } from '../Text/Text'
import styles from './Main.module.css'

export const Main = () => {

    return (
        <div>
            <Star />
            <Text
                title={'How did we do?'}
                desc={'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}
            />
            <Button />
        </div>
    )
}
