const initialState = {
    dummy: 'dummy_value'
}

const dummyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state; 
    }
}

export default dummyReducer