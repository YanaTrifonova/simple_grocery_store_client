import React, {useEffect} from "react";
import "../App.css";
import myOrderList from "../images/page/my_order_list.gif"
import {useDispatch, useSelector} from "react-redux";
import {getUserId} from "../store/order/action";
import {getUserLoading, getUsersOrder} from "../store/order/selector";

export default function MyOrderPage() {
    const userId = localStorage.getItem("id");
    const orderItems = useSelector(getUsersOrder);
    const isLoading = useSelector(getUserLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserId(userId));
    }, [])

    return (
        <div className="blocks">
            <div className="block block--left">
                <img className="block--left-img" src={myOrderList} alt="myOrderList"/>
            </div>
            <div className="block block--right">
                {isLoading
                 ? <em>Loading</em>
                 : <div className="home-container">
                     {orderItems?.map((item) => {
                         return <h1>{item.productName}</h1>
                     })}
                 </div>
                }
            </div>
        </div>
    )
}