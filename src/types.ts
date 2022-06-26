import { IFilterAction } from "./ducks/models/CardsActions"

export interface RootState {
    card: CardsState
    filter: FilterState
}


export type CardsState = Array<ICards> | []

export type ICards = {
    id: number | [],
    name: string,
    filter: string,
    icon: Icons
}


export type Icons = {
    url: string
}

export type FilterState = {
    filter?: string
    limit?: number,
}

export type DispatchFilterType = (args: IFilterAction) => IFilterAction