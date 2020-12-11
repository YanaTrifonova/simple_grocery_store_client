import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../store/category/action";
import productHunt from "../images/page/product_hunt.gif";
import {categoriesLoading, selectCategories} from "../store/category/selector";
import "./OrderFoodPage.css";

export default function OrderFoodPage() {
    const dispatch = useDispatch();

    const isLoading = useSelector(categoriesLoading);
    const categories = useSelector(selectCategories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="blocks">
            <div className="block block--left">
                <img className="block--left-img" src={productHunt} alt="productHunt"/>
            </div>
            <div className="block block--right">
                <div className="home-container">
                    <h1>Choose category:</h1>
                    {isLoading
                     ? <em>Loading...</em>
                     : <div>
                         <ol>
                             {categories?.map((category) => {
                                 return (
                                     <a className="category-link" href={`/orderFood/${category.id}`} key={category.id}>
                                         <h2>
                                             <li className="category-text">{category.categoryName}</li>
                                         </h2>
                                     </a>
                                 )
                             })}
                         </ol>
                     </div>
                    }
                </div>
            </div>
        </div>
    );
}