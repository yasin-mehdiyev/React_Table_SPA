import { combineReducers } from "redux";

// Slices
import userReducer from '../features/user/userSlice';

export const rootReducer : any = combineReducers({
    users: userReducer,
});