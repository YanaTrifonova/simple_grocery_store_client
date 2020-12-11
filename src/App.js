import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage";
import MyHomePage from "./pages/MyHomePage"
import MyOrderPage from "./pages/MyOrderPage";
import OrderFoodPage from "./pages/OrderFoodPage";

import home from "./images/navigation/home.png";
import signUp from "./images/navigation/signUp.png";
import myOrder from "./images/navigation/myOrder.png";
import orderFood from "./images/navigation/orderFood.png";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="navigation">
                    <a className="navigation-item tooltip" href="/signUp">
                        <img className="navigation-img" alt="signUp" src={signUp}/><span className="tooltiptext">Sign up</span></a>
                    <a className="navigation-item tooltip" href="/">
                        <img className="navigation-img" alt="home" src={home}/><span className="tooltiptext">Go back home</span></a>
                    <a className="navigation-item tooltip" href="/orderFood">
                        <img className="navigation-img" alt="orderFood" src={orderFood}/><span className="tooltiptext">Order products</span></a>
                    <a className="navigation-item tooltip" href="/myOrder">
                        <img className="navigation-img" alt="myOrder" src={myOrder}/><span className="tooltiptext">View your current order</span></a>
                </div>
                <Switch>
                    <Route path="/signUp" component={SignUpPage}/>
                    <Route path="/myOrder" component={MyOrderPage}/>
                    <Route path="/orderFood" component={OrderFoodPage}/>
                    <Route path="/" component={MyHomePage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
