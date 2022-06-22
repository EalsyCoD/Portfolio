import { CardsState } from "../../types"

export enum ECardsActionType {
    GET_CARDS_INFO = 'GET-CARDS-INFO',
}


export type TCardsActions =
    | ICardsAction


export interface ICardsAction {
    type: ECardsActionType.GET_CARDS_INFO
    payload: CardsState
}