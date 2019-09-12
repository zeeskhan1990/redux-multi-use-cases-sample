import * as actionTypes from '../actions'

const initialState = {
    counter: 0
}

const counterReducer = (currentState=initialState, action) => {
    //Should be handled with switch-case, I know!!!
    if(action.type === actionTypes.INCREMENT) {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    } else if(action.type === actionTypes.DECREMENT) {
        return {
            ...currentState,
            counter: currentState.counter - 1
        }
    } else if(action.type === actionTypes.ADD) {
        return {
            ...currentState,
            counter: currentState.counter + action.value
        }
    } else if(action.type === actionTypes.SUBTRACT) {
        return {
            ...currentState,
            counter: currentState.counter - action.value
        }
    }
    return currentState
}

export default counterReducer