import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { RootState, CardsState, ICards } from '../../types'
import { ECardsActionType, TCardsActions } from '../models/CardsActions'

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

const deleteCards = (
    id: number,
): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ECardsActionType.DELETE_CARD,
                payload: id as unknown as ICards,
            })
        } catch (error: unknown) {
        }
    }
}

export { setCards, deleteCards }