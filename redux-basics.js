const redux = require('redux')

const initialState = {
    counter: 0
}
const createStore = redux.createStore

//Reducer
const rootReducer = (currentState=initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + action.value
        }
    }
    //Executed the first time when this method is called without any arguments(state or action)    
    return currentState
}

//Store
const store = createStore(rootReducer)
console.log(store.getState())

//Subscription to Action [Subscribers should be assigned before any dispatch]
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

//Dispatch Action
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER', value: 10})
console.log(store.getState())