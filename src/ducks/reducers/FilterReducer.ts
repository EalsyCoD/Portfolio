import { FilterState } from '../../types'
import { ECardsActionType, IFilterAction } from '../models/CardsActions'

const initialState: FilterState = {
    filter: 'ShowAll',
}

const FilterReducer = (
    state: FilterState = initialState,
    action: IFilterAction
): FilterState => {
    switch (action.type) {
        case ECardsActionType.FILTER_SET:
        case ECardsActionType.FILTER_SET_MOBILE:
        case ECardsActionType.FILTER_CLEAR:
            return {
                filter: action.payload.filter
            }
        default:
            return state
    }
}

export default FilterReducer