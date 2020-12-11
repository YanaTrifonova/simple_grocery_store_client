const initialState = {
    order: [],
    isLoaded: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING" : {
            return {
                ...state,
                loading: true,
            };
        }

        case "GET_FOOD_ITEMS" : {
            console.log("GET_FOOD_ITEMS",{
                order: action.payload,
                loading: false,
            })
            return {
                order: action.payload,
                loading: false,
            }
        }

        default: {
            return state;
        }
    }
}