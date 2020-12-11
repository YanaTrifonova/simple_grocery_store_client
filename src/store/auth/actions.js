import axios from "axios";

export function signUpAction(name, email, password) {
    return async function thunk(dispatch) {
        await axios.post("http://localhost:4000/user/add", {
            userName: name,
            email: email,
            password: password,
        });

        const userLoginResponse = await axios.post("http://localhost:4000/auth/login", {
            email: email,
            password: password,
        });

        dispatch(addUserAction({
            userName: name,
            email: email,
            jwt: userLoginResponse.data.jwt
        }))
    };
}

function addUserAction(newUser) {
    return {
        type: "ADD_USER",
        payload: newUser,
    }
}