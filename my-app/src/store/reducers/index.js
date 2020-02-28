import { combineReducers } from 'redux';
import {usersReducer} from "./users/users";
import {userDetailsReducer} from "./user-details/user-details";

export const rootReducer = combineReducers({
    users: usersReducer,
    userDetails: userDetailsReducer
});
