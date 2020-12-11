import {combineReducers} from "redux";
import authPageReducer from "./auth/reducer";
import orderFoodPageReducer from "./category/reducer";

const reducer = combineReducers({
    authPage: authPageReducer,
    orderFoodPage:  orderFoodPageReducer,
});

export default reducer;