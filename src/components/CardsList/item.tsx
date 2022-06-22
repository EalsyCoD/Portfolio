import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterMobile } from 'src/ducks/actions/FilterAction'
import { ICards, RootState } from '../../types'
import Filter from '../Filter'
import styles from './CardsList.module.scss'

interface Props {
    data: ICards
}

const Item: React.FC<Props> = ({ data }) => {
    const dispatch = useDispatch()
    const isFilter = useSelector((state: RootState) => state.filter.filter)
    return (
        <React.Fragment>
            <div className={styles.itemcontainer}>
                <img className={styles.img} src={data.icon.url} alt="img"></img>
                <div className={styles.block}>
                    <p className={styles.name}>{data.name}</p>
                </div>
                <div className={styles.border}>
                    <option defaultValue={isFilter} onClick={(e: any) => dispatch(setFilterMobile(e.target.value))} className={styles.filter}>{data.filter}</option>
                </div>
            </div >
        </React.Fragment>
    )
}


export { Item }