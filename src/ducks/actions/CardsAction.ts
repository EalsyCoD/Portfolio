import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { RootState, CardsState } from '../../types'
import { ECardsActionType, TCardsActions } from '../models/CardsActions'

const setCards = (
): ThunkAction<void, RootState, unknown, TCardsActions> => {
    return async (dispatch) => {
        try {
            const { data } = (await axios.get<CardsState>('/items'))

            dispatch({
                type: ECardsActionType.GET_CARDS_INFO,
                payload: data
            })

        } catch (error: unknown) {
        }
    }
}

export { setCards }