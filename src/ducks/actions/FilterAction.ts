import { ThunkAction } from 'redux-thunk'

import { DispatchFilterType, RootState } from '../../types'
import { ECardsActionType, TCardsActions } from '../models/CardsActions'

const setFilterMobile = (
    filter: string
): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch: DispatchFilterType) => {
        dispatch({
            type: ECardsActionType.FILTER_SET_MOBILE,
            payload: {
                filter,
            },
        })
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

export { clearFilter, setFilterMobile }