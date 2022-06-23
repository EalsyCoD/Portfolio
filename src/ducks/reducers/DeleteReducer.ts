import { DeleteAction, DeleteCard } from '../../types'

const initialState: DeleteCard = {
    items: []
}

const DeleteReducer = (
    state: DeleteCard = initialState,
    action: DeleteAction
): DeleteCard => {
    switch (action.type) {
        case "DELETE-CARD": {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            }
        }
        default:
            return state
    }
}

export { DeleteReducer };