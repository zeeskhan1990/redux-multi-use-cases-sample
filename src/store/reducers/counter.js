import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
    counter: 0
}

const counterReducer = (currentState=initialState, action) => {
    //Should be handled with switch-case, I know!!!
    if(action.type === actionTypes.INCREMENT) {
        return updateObject(currentState, {
            counter: currentState.counter + 1
        })
        /* return {
            ...currentState,
            counter: currentState.counter + 1
        } */
    } else if(action.type === actionTypes.DECREMENT) {
        return updateObject(currentState, {
            counter: currentState.counter - 1
        })
        /* return {
            ...currentState,
            counter: currentState.counter - 1
        } */
    } else if(action.type === actionTypes.ADD) {
        return updateObject(currentState, {
            counter: currentState.counter + action.value
        })
        /* return {
            ...currentState,
            counter: currentState.counter + action.value
        } */
    } else if(action.type === actionTypes.SUBTRACT) {
        return updateObject(currentState, {
            counter: currentState.counter - action.value
        })
        /* return {
            ...currentState,
            counter: currentState.counter - action.value
        } */
    }
    return currentState
}

export default counterReducer