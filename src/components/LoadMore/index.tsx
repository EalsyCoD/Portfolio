import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "src/ducks/actions/CardsAction";
import { setFilterLimit } from "src/ducks/actions/FilterAction";
import { RootState } from "src/types";

import styles from './LoadMore.module.scss'


const LoadMore = () => {
    const dispatch = useDispatch()
    const isLimit = useSelector((state: RootState) => state.filter.limit) as number


    const handleLoadMore = () => {
        const value = isLimit + 9
        console.log(value)
        dispatch(setFilterLimit(value))
        dispatch(setCards())
    }

    return (
        <div className={styles.container}>
            <button defaultValue={isLimit} onClick={handleLoadMore} className={styles.button}>LOAD MORE
            </button>
        </div>
    )
}


export default LoadMore;