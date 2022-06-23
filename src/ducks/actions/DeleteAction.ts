import axios from "axios"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { DeleteCard, RootState } from "src/types"

const deleteCards = (
    id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            await axios.delete<DeleteCard>(`/items/${id}`)
            dispatch({
                type: "DELETE-CARD",
                payload: id
            })
        } catch (error: unknown) {
        }
    }
}


export { deleteCards }