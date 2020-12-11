import React from "react";
import home from "../images/page/Home.gif";
import "../index.css";
import "./MyHomePage.css";

export default function MyHomePage() {
    return (
        <div className="blocks">
            <div className="block block--left">
                <img className="block--left-img" src={home} alt="home"/>
            </div>
            <div className="block block--right">
                <div className="home-container">
                    <h1>Welcome to Simple grocery Store</h1>
                    <p>You could order products from the internet.</p>
                </div>
            </div>
        </div>
    )
}