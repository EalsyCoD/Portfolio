import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'
import { Item } from './item'
import styles from './CardsList.module.scss'



const CardsList = (): JSX.Element => {
    const cards = useSelector((state: RootState) => state.card)
    return (
        <React.Fragment>
            {cards.length > 0 ? (
                <div className={styles.container}>
                    {cards.map((item) => (
                        <Item key={item.name} data={item} />
                    ))}
                </div>
            ) : (
                <React.Fragment></React.Fragment>
            )}

        </React.Fragment>
    )
}


export default CardsList