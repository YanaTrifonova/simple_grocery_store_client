import axios from "axios";

function getCategoriesAction(data) {
    return {
        type: "GET_CATEGORIES",
        payload: data,
    };
}

export function setLoadingAction() {
    return {
        type: "SET_LOADING",
    }
}

export function getCategories() {
    return async function thunk(dispatch) {
        dispatch(setLoadingAction);
        const data = await axios.get("http://localhost:4000/categories");
        dispatch(getCategoriesAction(data.data));
    }
}
