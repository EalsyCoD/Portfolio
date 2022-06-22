import React from 'react'
import { ICards } from '../../types'
import styles from './CardsList.module.scss'

interface Props {
    data: ICards
}

const Item: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.itemcontainer}>
            <p>{data.name}</p>
            <img src={data.icon.url} alt="img"></img>
        </div>
    )
}


export { Item }