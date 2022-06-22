export interface RootState {
    card: CardsState
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