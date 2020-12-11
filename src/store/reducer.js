import {combineReducers} from "redux";
import authPageReducer from "./auth/reducer";
import orderFoodPageReducer from "./category/reducer";
import myOrderPageReducer from "./order/reducer";

const reducer = combineReducers({
    authPage: authPageReducer,
    orderFoodPage:  orderFoodPageReducer,
    myOrderPage:  myOrderPageReducer,
});

export default reducer;