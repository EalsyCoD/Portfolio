import axios from "axios"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState } from "src/types"
import { TCardsActions } from "../models/CardsActions"

const deleteCards = (
    id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            await axios.delete(`/items/${id}`)
            dispatch({
                type: "DELETE-CARD",
                payload: id
            })
        } catch (error: unknown) {
        }
    }
}


export { deleteCards }