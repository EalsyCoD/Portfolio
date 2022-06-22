import { CardsState } from '../../types'
import { ECardsActionType, ICardsAction } from '../models/CardsActions'

const initialState: CardsState = [{
    name: '',
    filter: '',
    icon: {
        url: ''
    }
}]

const CardsReducer = (
    state: CardsState = initialState,
    action: ICardsAction
): CardsState => {
    switch (action.type) {
        case ECardsActionType.GET_CARDS_INFO:
            return action.payload
        default:
            return state
    }
}

export default CardsReducer