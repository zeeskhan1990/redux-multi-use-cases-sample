import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import counterReducer from "./store/reducers/counter"
import resultReducer from "./store/reducers/result"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

//Middleware runs in between action dispatch & reducers acting on those actions
//This store specifically consists of two methods 'dispatch' & 'getState'
const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('LOGGER MIDDLEWARE', action)
            console.log(store)

            //Async activity
            /* setTimeout(() => {
                const result = next(action)
            }, 3000) */
            const result = next(action)
            console.log("LOGGER MIDDLEWARE next State AND Result", store.getState(), result)
            return result            
        }
    }
}

/**
 * This is what redux thunk is mostly
 * In the thunk middleware, what it does is that it receives the action here, and then checks for it's type.
 * Usually actions are a plain object , now instead if the action type is a function then that function
 * would be invoked with dispatch, getState & extraArgument. Note that no next is called, so any middleware 
 * lined up after thunk won't work. The function is expected to now at it's discretion to invoke a dispatch
 * with a standard action object, and that would in return set a new chain of middleware actions and eventually
 * be consumed by a reducer
 */
const createMyThunk = (extraArgument) => {
    return (store) => {
        return (next) => {
            return (action) => {
                if (typeof action === 'function') {
                    return action(store.dispatch, store.getState, extraArgument);
                  }
                  //Only executed when the action type is not function
                  return next(action)
            }
        }
    }
}

const myThunk = createMyThunk()
myThunk.extraArgument = createMyThunk



//(store) = ({dispatch, getState})
const postThunk = ({dispatch, getState}) => {
    return (next) => {
        return (action) => {
            console.log("POST THUNK ---", action)
            return next(action)
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk, postThunk)))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
