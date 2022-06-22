import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "src/ducks/actions/CardsAction";
import { setFilterLimit } from "src/ducks/actions/FilterAction";
import { RootState } from "src/types";

import styles from './LoadMore.module.scss'


const LoadMore = () => {
    const dispatch = useDispatch()
    const isLimit = useSelector((state: RootState) => state.filter.limit)
    return (
        <div className={styles.container}>
            <button defaultValue={isLimit} onClick={() => {
                dispatch(setFilterLimit(18))
            }} className={styles.button}>LOAD MORE
            </button>
        </div>
    )
}


export default LoadMore;