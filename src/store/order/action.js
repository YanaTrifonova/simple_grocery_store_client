import axios from "axios";

export function setLoadingAction() {
    return {
        type: "SET_LOADING",
    }
}

export function getFoodItems(data) {
    console.log("data",data)
    return {
        type: "GET_FOOD_ITEMS",
        payload: data,
    }
}

export function getUserId(userId) {
    return async function thunk(dispatch) {
        const order = await axios.get(`http://localhost:4000/orders/${userId}`);
        setLoadingAction();
        dispatch(getFoodItems(order.data));
    }
}