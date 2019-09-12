import React, { Component } from 'react';
import {connect} from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as Actions from '../../store/actions/index'
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
        onIncrementCounter: () => dispatch(Actions.increment()),
        onDecrementCounter: () => dispatch(Actions.decrement()),
        onAddCounter: () => dispatch(Actions.add(5)),
        onSubtractCounter: () => dispatch(Actions.subtract(5)),
        onStoreResult: (resultValue) => dispatch(Actions.storeResult(resultValue)),
        onDeleteResult: (resultId) => dispatch(Actions.deleteResult(resultId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);