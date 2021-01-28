export const initialState = [{
    task: 'Add Task',
    complete: false,
    id: Date.now()
}]

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK' :
        return [...state, {
            task: action.payload,
            complete: false,
            id: Date.now()
        }]
        case 'TOGGLE_COMPLETE' :
            return state.map(ele => ele.id === action.id ? {...ele, complete: !ele.complete} : ele)
        case 'REMOVE_TASK' :
            return state.filter(ele => !ele.complete)
        default: return state;

    }
}