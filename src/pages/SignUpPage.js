import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signUpAction} from "../store/auth/actions";
import {getUser} from "../store/auth/selector";
import "../index.css";
import "./SignUpPage.css";
import signUp from "../images/page/signUp.gif"

export default function SignUpPage(key, value) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("null");

    const user = useSelector(getUser);

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(signUpAction(name, email, password));
    }

    useEffect(() =>{
        if (user.name !== null && user.email !== null && user.jwt !== null) {
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email);
            localStorage.setItem("jwt", user.jwt);
        }

        setUserName(localStorage.getItem("name"));

    }, [user]);

    function logout() {
        localStorage.setItem("name", "null");
        localStorage.setItem("email", "null");
        localStorage.setItem("jwt", "null");
        setUserName("null");
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            {userName !== "null"
             ?
             <div className="blocks">
                 <div className="block block--left">
                     <img className="block--left-img" src={signUp}/>
                 </div>
                 <div className="block block--right greeting">
                     <div className="greeting">
                         <h1 className="logging-greeting">{userName} successfully logged in</h1>
                         <button onClick={logout} className="greeting--button">Log out</button>
                     </div>
                 </div>
             </div>
             :
             <div className="blocks">
                 <div className="block block--left">
                     <img className="block--left-img" src={signUp}/>
                 </div>
                 <div className="block block--right">
                     <div className="input-container">
                         <h1>Sign up</h1>
                         <form onSubmit={handleSubmit}>
                             <div>
                                 <label className="input-label">Name:</label><br/>
                                 <input
                                     type="text"
                                     value={name}
                                     onChange={e => setName(e.target.value)}
                                 />

                             </div>
                             <div className="input-container">
                                 <label className="input-label">Email:</label><br/>
                                 <input
                                     type="email"
                                     value={email}
                                     onChange={e => setEmail(e.target.value)}
                                 />
                             </div>
                             <div className="input-container">
                                 <label className="input-label">Password:</label><br/>
                                 <input
                                     type="password"
                                     value={password}
                                     onChange={e => setPassword(e.target.value)}
                                 />

                             </div>
                             <p>
                                 <button type="submit">Sign up</button>
                             </p>
                         </form>
                     </div>
                 </div>
             </div>
            }
        </div>
    );
}