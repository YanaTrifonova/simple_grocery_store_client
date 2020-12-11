import React from "react";
import home from "../images/page/Home.gif";
import {useParams} from "react-router";
import onlineGrocery from "../images/page/online_groceries.gif";
import "../index.css";

export default function OrderFoodItemsPage() {
    const {id} = useParams();
    console.log("id", id);

    return (
        <div className="blocks">
            <div className="block block--left">
                <img className="block--left-img" src={onlineGrocery} alt="onlineGrocery"/>
            </div>
            <div className="block block--right">
                <div className="home-container">
                    <h1>Here is what we got</h1>
                </div>
            </div>
        </div>
    )
}