import {LOAD_USER_DETAILS} from "../../actions/user-actions";

const initialState = [];

const userDetails = [
    {id: 1, fullName: 'John Doe', job: 'developer'},
    {id: 2, fullName: 'Michael Smith', job: 'engineer'},
    {id: 3, fullName: 'Anna Black', job: 'director'}
];

export function userDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_DETAILS:
            return [...state, userDetails.find(details => details.id === action.payload)];
        default:
            return state;
    }
}

