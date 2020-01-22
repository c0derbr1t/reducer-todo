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
        case "TOGGLE_COMPLETE":
            console.log("in Toggle in reducer", state);
            console.log("action in toggle", action.payload);
            state.map(item => {
                console.log("item id in map from toggle", item.id);
                if (item.id === action.payload) {
                    return {
                        item: item.item,
                        completed: !item.completed,
                        id: item.id
                    }
                } else {
                    return {
                        item: item.item,
                        completed: item.completed,
                        id: item.id
                    }
                };
            });
        case "CLEAR_COMPLETED":
            console.log("state in Clear", state);
            const notCompleted =  state.filter(item => !item.completed);
            const completed = state.filter(item => item.completed);
            console.log("Completed: ", notCompleted);
            console.log("Completed: ", completed);
            return [state, notCompleted, completed];
                
            
            
        
        default:
            return state;
    }
}

/*
   return state.map(item => {
   // if item matches, change completion status
   // else return the item the way it is
    })
*/