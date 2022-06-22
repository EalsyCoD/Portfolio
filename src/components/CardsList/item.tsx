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
    const [selected, setSelected] = React.useState(data.status);
    const [datas, setData] = React.useState(data);
    const handleSelected = () => {
        if (selected === 'Selected') {
            setSelected('NotSelected');
            setData(data);
        } else if (selected === 'NotSelected') {
            setSelected('Selected');
            setData(data);
        }
    };

    return (
        <React.Fragment>
            {selected === 'NotSelected' && (
                <div onClick={handleSelected} className={styles.itemcontainer}>
                    <img className={styles.img} src={datas.icon.url} alt="img"></img>
                    <div className={styles.block}>
                        <p className={styles.name}>{datas.name}</p>
                    </div>
                    <div className={styles.border}>
                        <option defaultValue={isFilter} onClick={(e: any) => dispatch(setFilterMobile(e.target.value))} className={styles.filter}>{datas.filter}</option>
                    </div>
                </div>
            ) || (
                    <React.Fragment>
                        <div onClick={handleSelected} className={styles.itemcontainer}>
                            <div className={styles.borderSelected}>
                                <img className={styles.img} src={datas.icon.url} alt="img"></img>
                            </div>
                            <div className={styles.block}>
                                <p className={styles.name}>{datas.name}</p>
                            </div>
                            <div className={styles.border}>
                                <option defaultValue={isFilter} onClick={(e: any) => dispatch(setFilterMobile(e.target.value))} className={styles.filter}>{datas.filter}</option>
                            </div>
                        </div>
                    </React.Fragment>
                )}
        </React.Fragment>
    )
}


export { Item }