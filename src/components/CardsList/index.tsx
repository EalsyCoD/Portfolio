import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'
import { Item } from './item'
import styles from './CardsList.module.scss'
import Filter from '../Filter'
import LoadMore from '../LoadMore'



const CardsList = (): JSX.Element => {
    const cards = useSelector((state: RootState) => {
        const cards = state.card
        const isFilter = state.filter.filter
        if (isFilter === "ShowAll") {
            return cards
        } else {
            return cards.filter((el) => el.filter === isFilter)
        }
    })
    return (
        <React.Fragment>
            {cards.length > 0 ? (
                <div className={styles.container}>
                    <Filter />
                    {cards.map((item) => (
                        <Item key={item.id} data={item} />
                    ))}

                </div>
            ) : (
                <React.Fragment>Загрузка!</React.Fragment>
            )}
            <LoadMore />
        </React.Fragment>
    )
}


export default CardsList