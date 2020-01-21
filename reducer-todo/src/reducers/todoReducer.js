export const initialState = [
    {
        item: 'Happiness',
        completed: false,
        id: 1
    },
    {
        item: 'Sleep',
        completed: false,
        id: 2
    },
    {
        item: 'Eat',
        completed: false,
        id: 3
    }
    ]

export const todoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}