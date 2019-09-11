import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (currentState=initialState, action) => {
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
    } else if(action.type === actionTypes.STORE_RESULT) {
        const [...newResults] = currentState.results
        newResults.push({id: Math.floor(Date.now() / 1000), value: currentState.counter})
        return {
            ...currentState,
            results: newResults
        }
    } else if(action.type === actionTypes.DELETE_RESULT) {
        console.log(action)
        let [...clonedResults] = currentState.results
        clonedResults = clonedResults.filter((temp) => {
            return temp.id !== action.resultId
        })
        debugger
        return {
            ...currentState,
            results: clonedResults
        }
    }
    return currentState
}

export default reducer