import { handleActions } from 'redux-actions';
import actions from '../actions';

// action type load
const { SET_SAMPLE } = actions.SampleAction;

// default state value
const initialState = {
    sample: 0,
};

// handle action
export default handleActions(
    {
        [SET_SAMPLE]: (state, action) => ({
            ...state,
            sample: action.payload,
        }),
    },
    initialState
);
