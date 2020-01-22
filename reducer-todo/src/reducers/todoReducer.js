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
                action.payload
            ];
        default:
            return state;
    }
}