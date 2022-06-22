import { CardsState, FilterState } from "../../types"

export enum ECardsActionType {
    GET_CARDS_INFO = 'GET-CARDS-INFO',
    FILTER_SET = 'FILTER-SET',
    FILTER_CLEAR = 'CLEAR-FILTER',
    FILTER_SET_MOBILE = 'FILTER-SET-MOBILE',
    FILTER_SET_LIMIT = 'FILTER-SET-LIMIT'
}


export type TCardsActions =
    | ICardsAction
    | IFilterAction


export interface ICardsAction {
    type: ECardsActionType.GET_CARDS_INFO
    payload: CardsState
}


export interface IFilterAction {
    type: ECardsActionType
    payload: FilterState
}