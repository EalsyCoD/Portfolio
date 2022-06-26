import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCards } from 'src/ducks/actions/CardsAction'
import { setFilterMobile } from 'src/ducks/actions/FilterAction'
import { ICards, RootState } from '../../types'
import styles from './CardsList.module.scss'

interface Props {
    data: ICards
}


const Item: React.FC<Props> = ({ data }) => {
    const dispatch = useDispatch()
    const [projectId, setProjectId] = React.useState<number | null>(null);
    const [activeProject, setActiveProject] = React.useState<boolean>(false);
    const isFilter = useSelector((state: RootState) => state.filter.filter)

    const changeActiveProject = (id: number) => {
        if (window.innerWidth && window.innerHeight < 1039) {
            if (id === projectId) {
                setActiveProject(false)
                setProjectId(null)
            } else {
                setProjectId(id)
                setActiveProject(true)
            }
        }
    }

    const deleteProjectDeleteKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Delete') {
            projectId && dispatch(deleteCards(projectId))
        }
    }

    const activeProjectStyles = (projectId === data.id && activeProject)
        ? `${styles.itemcontainer} ${styles.itemcontainer_active}`
        : styles.itemcontainer
    return (
        <React.Fragment>
            <div tabIndex={0} onKeyDown={deleteProjectDeleteKey} onClick={() => changeActiveProject(data.id as number)} className={activeProjectStyles}>
                <img className={styles.img} src={data.icon.url} alt="img"></img>
                <div className={styles.block}>
                    <p className={styles.name}>{data.name}</p>
                </div>
                <div className={styles.border}>
                    <option defaultValue={isFilter} onClick={(e: any) => dispatch(setFilterMobile(e.target.value))} className={styles.filter}>{data.filter}</option>
                </div>
            </div>
        </React.Fragment>
    )
}


export { Item }