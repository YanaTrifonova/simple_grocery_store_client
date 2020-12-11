const initialState = {
    categories: [],
    isLoaded: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LOADING" : {
            return {
                ...state,
                isLoaded: true,
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
                isLoaded: false,
            };
        }

        default: {
            return state;
        }
    }
}