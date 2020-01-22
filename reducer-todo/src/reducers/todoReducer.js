export const initialState = [
    {
        item: 'Happiness',
        completed: false,
        id: 1
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log("action", action.payload);
            return [
                ...state, 
                {
                    item: action.payload.item,
                    completed: action.payload.completed,
                    id: action.payload.id
                }
            ];
        default:
            return state;
    }
}