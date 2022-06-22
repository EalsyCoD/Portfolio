import { IFilterAction } from "./ducks/models/CardsActions"

export interface RootState {
    card: CardsState
    filter: FilterState
}


export type CardsState = [{
    name: string,
    filter: string,
    icon: Icons
}]


export type ICards = {
    name: string,
    filter: string,
    icon: Icons
}

export type Icons = {
    url: string
}


export type FilterState = {
    filter: string
}

export type DispatchFilterType = (args: IFilterAction) => IFilterAction