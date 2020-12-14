import React, {useEffect} from "react";
import myOrderList from "../images/page/my_order_list.gif"
import {useDispatch, useSelector} from "react-redux";
import {getUserId} from "../store/order/action";
import {getTotalSumOfTheOrder, getUserLoading, getUsersOrder} from "../store/order/selector";
import "../App.css";
import "./MyOrderPage.css";

export default function MyOrderPage() {
    const userId = localStorage.getItem("id");
    const orderItems = useSelector(getUsersOrder);
    const isLoading = useSelector(getUserLoading);
    const total = useSelector(getTotalSumOfTheOrder);

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
                     <h1>Your order:</h1>
                     <table className="styled-table">
                         <thead>
                         <tr>
                             <th>Index</th>
                             <th>Product name</th>
                             <th>Price per item, $</th>
                             <th>Total price, $</th>
                         </tr>
                         </thead>
                         <tbody>
                         {orderItems?.map((item, index) => {
                             return (
                                 <tr className="active-row" key={index}>
                                     <td>{index}</td>
                                     <td className="leftered">{item.productName}</td>
                                     <td>{item.price}</td>
                                     <td>{item.price * item.numberOfItems}</td>
                                 </tr>
                             )
                         })}

                         </tbody>
                         <thead>
                         <tr>
                             <td className="total-row">Total:</td>
                             <td>{}</td>
                             <td>{}</td>
                             <td className="total-row centered">{total}</td>
                         </tr>
                         </thead>
                     </table>
                 </div>
                }
            </div>
        </div>
    )
}