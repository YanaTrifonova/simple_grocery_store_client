import {combineReducers} from "redux";
import authPageReducer from "./auth/reducer";

const reducer = combineReducers({
    authPage: authPageReducer,
});

export default reducer;