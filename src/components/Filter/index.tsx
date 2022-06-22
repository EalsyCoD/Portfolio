import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilterMobile } from "src/ducks/actions/FilterAction"
import { RootState } from "src/types"
import styles from './Filter.module.scss'


const Filter = () => {
    const [active, setActive] = React.useState<boolean>(false)
    const rootClasses = [styles.filt];
    if (active) {
        rootClasses.push(styles.active)
    } else {
        rootClasses.push(styles.filt)
    }
    const FilterState = [
        'ShowAll',
        'Design',
        'Branding',
        'Illustration',
        'Motion'
    ]
    const dispatch = useDispatch()
    const isFilter = useSelector((state: RootState) => state.filter.filter)
    return (
        <div className={styles.container}>
            <div defaultValue={isFilter} onClick={(e: any) => dispatch(setFilterMobile(e.target.value))} className={styles.filter}>
                {FilterState.map((item, i) => (
                    <option key={i} className={styles.filt}>{item}</option>
                ))}
            </div>
            <div className={styles.mobileFilter}>
                <select defaultValue={isFilter} onClick={(e: any) => dispatch(setFilterMobile(e.target.value))} className={styles.MobileSelect}>
                    {FilterState.map((item, i) => (
                        <option key={i} className={styles.Mobileoption}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}


export default Filter;