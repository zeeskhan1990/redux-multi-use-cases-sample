import * as actionTypes from './actionTypes'

export const saveResult = (resultValue) => {
    //Can do addl logic here
    return {
        type: actionTypes.STORE_RESULT,
        resultValue
    }
}
/**
 * 
 */
export const storeResult = (resultValue) => {
    return (dispatch /*,getState, extraArgument*/) => {
        return setTimeout(() => {
            console.log("In Store Result")
            dispatch(saveResult(resultValue))
        }, 3000)
    }
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId
    };
};