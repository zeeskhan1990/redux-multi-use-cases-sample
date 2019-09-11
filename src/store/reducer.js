const initialState = {
    counter: 0
}

const reducer = (currentState=initialState, action) => {
    if(action.type === "INCREMENT") {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }
    return currentState
}

export default reducer