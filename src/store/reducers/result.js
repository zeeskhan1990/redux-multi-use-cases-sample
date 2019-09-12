import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const resultReducer = (currentState=initialState, action) => {
    //Should be handled with switch-case, I know!!!
    if(action.type === actionTypes.STORE_RESULT) {
        const [...newResults] = currentState.results

        //Can't do currentState.ctr.counter because in this only the slice of the state used with this reducer is accessible
        //newResults.push({id: Math.floor(Date.now() / 1000), value: currentState.ctr.counter})
        newResults.push({id: Math.floor(Date.now() / 1000), value: action.resultValue})
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

export default resultReducer