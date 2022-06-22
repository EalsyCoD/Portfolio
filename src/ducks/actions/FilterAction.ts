import { ThunkAction } from 'redux-thunk'

import { DispatchFilterType, RootState } from '../../types'
import { ECardsActionType, TCardsActions } from '../models/CardsActions'
import { setCards } from './CardsAction'

const setFilterMobile = (
    filter: string
): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch: DispatchFilterType, getState) => {
        dispatch({
            type: ECardsActionType.FILTER_SET_MOBILE,
            payload: {
                filter,
                limit: getState().filter.limit
            },
        })
    }
}
const setFilterLimit = (
    limit: number
): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch, getState) => {
        try {
            dispatch(setCards())
            dispatch({
                type: ECardsActionType.FILTER_SET_LIMIT,
                payload: {
                    filter: getState().filter.filter,
                    limit,
                },
            })
        } catch (error: any) {
            dispatch(setCards())
        }
    }
}
const clearFilter = (): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch: DispatchFilterType) => {
        dispatch({
            type: ECardsActionType.FILTER_CLEAR,
            payload: {
                filter: 'ShowAll',
            },
        })
    }
}

export { clearFilter, setFilterMobile, setFilterLimit }