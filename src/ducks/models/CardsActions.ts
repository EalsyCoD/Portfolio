import { CardsState, DeleteCard, FilterState, ICards } from "../../types"

export enum ECardsActionType {
    GET_CARDS_INFO = 'GET-CARDS-INFO',
    FILTER_SET = 'FILTER-SET',
    FILTER_CLEAR = 'CLEAR-FILTER',
    FILTER_SET_MOBILE = 'FILTER-SET-MOBILE',
    FILTER_SET_LIMIT = 'FILTER-SET-LIMIT',
    DELETE_CARD = 'DELETE-CARD',
}


export type TCardsActions =
    | ICardsAction
    | IFilterAction
    | ICardDelete


export interface ICardsAction {
    type: ECardsActionType
    payload: CardsState
}

export interface ICardDelete {
    type: ECardsActionType
    payload: ICards
}


export interface IFilterAction {
    type: ECardsActionType
    payload: FilterState
}