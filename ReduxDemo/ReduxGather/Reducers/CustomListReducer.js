/**
 *
 */
import CustomItemReducer from './CustomItemReducer'

const customListReducer = (state = [], action) => {
    console.log(action,"action")
    switch (action.type) {
        case 'ADD_CUSTOM_ITEM_ACTION':
            let newCustomItem = {
                id: action.id,
                text: action.text,
                name:action.name,
            }
            let newState = [...state]
            console.log('newState', newState);
            newState.push(newCustomItem);
            return newState;

        case 'DELETE_CUSTOM_ITEM_ACTION':
            let newDeleteItem = {
                id: action.id,
                text: action.text,
                card:action.card,
            }
            let newDelete = [...state]
            newDelete.pop(newDeleteItem)
            return newDelete

        case 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION':
            return state.map((customItem) => {
                return CustomItemReducer(customItem, action)
            })

        default:
            return state
    }
}

export default customListReducer