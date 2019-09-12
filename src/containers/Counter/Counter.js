import React, { Component } from 'react';
import {connect} from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map((result) => {
                        return (<li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                                    {result.value}
                                </li>)
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    //Added nesting happens because of splitting reducer
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
    /* return {
        ctr: state.counter,
        storedResults: state.results
    } */
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value:5}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value:5}),
        onStoreResult: (resultValue) => dispatch({type: actionTypes.STORE_RESULT, resultValue}),
        /* onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}), */
        onDeleteResult: (resultId) => dispatch({type:actionTypes.DELETE_RESULT, resultId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);