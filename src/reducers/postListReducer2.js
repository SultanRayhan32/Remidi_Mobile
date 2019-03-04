import {
    GETLIST_SUCCESS2
} from '../actions/types'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GETLIST_SUCCESS2:
            return action.payload;
        default:
            return state;
    }
};