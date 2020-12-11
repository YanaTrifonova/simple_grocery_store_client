const initialState = {
    id: null,
    name: null,
    email: null,
    jwt: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER" : {
            return {
                id: action.payload.id,
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