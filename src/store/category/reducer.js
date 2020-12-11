const initialState = {
    categories: [],
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

        case "GET_CATEGORIES" : {
            let newState = [];
            action.payload.forEach((data, index) => {
                newState[index] = {
                    "id" : data.id,
                    "categoryName" : data.categoryName,
                }
            })

            return {
                categoryName: newState,
                loading: false,
            };
        }

        default: {
            return state;
        }
    }
}