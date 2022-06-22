import React from 'react'
import { ICards } from '../../types'
import styles from './CardsList.module.scss'

interface Props {
    data: ICards
}

const Item: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.itemcontainer}>
            <img className={styles.img} src={data.icon.url} alt="img"></img>
            <div className={styles.block}>
                <p className={styles.name}>{data.name}</p>
            </div>
            <div className={styles.border}>
                <p className={styles.filter}>{data.filter}</p>
            </div>
        </div >
    )
}


export { Item }