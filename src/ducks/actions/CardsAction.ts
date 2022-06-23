import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { RootState, CardsState, ICards, DeleteCard } from '../../types'
import { ECardsActionType, TCardsActions } from '../models/CardsActions'
import { AnyAction } from 'redux'

const setCards = (
): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch, getState) => {
        try {
            const { data } = (await axios.get<CardsState>(`/items?_page=1&_limit=${getState().filter.limit}`))
            dispatch({
                type: ECardsActionType.GET_CARDS_INFO,
                payload: data
            })

        } catch (error: unknown) {
        }
    }
}

export { setCards }