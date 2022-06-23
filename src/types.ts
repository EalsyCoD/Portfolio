import { IFilterAction } from "./ducks/models/CardsActions"

export interface RootState {
    card: CardsState
    filter: FilterState
    delete: DeleteCard
}


export type CardsState = [{
    id: number,
    name: string,
    filter: string,
    status: string,
    icon: Icons
}]




export type ICards = {
    id: number,
    name: string,
    filter: string,
    status: string,
    icon: Icons
}

export type DeleteAction = {
    type: string,
    payload: Delete
}

export type DeleteCard = {
    items: Delete[]
}

export type Delete = {
    id: number | any,
    name: string,
    filter: string,
    status: string,
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