const initialState = {
    name: null,
    email: null,
    jwt: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER" : {
            return {
                name: action.payload.userName,
                email: action.payload.email,
                jwt: action.payload.jwt
            };
        }

        default: {
            return state;
        }
    }
}