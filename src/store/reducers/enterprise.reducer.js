import {
    SET_INFO_USER
} from '../actions/action-types';

const initialState = {

    infosUser: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_USER:
            return {
                ...state,
                infosUser: action.payload,
            };


        default:
            return state;
    }
};
