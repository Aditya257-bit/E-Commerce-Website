import React from 'react'
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import AllProducts from '../AllProducts/AllProducts';

const LandingPage = ({pagination, pages, product, category, deleteCategory, deleteProduct, switchUpdateCategory, productDisplay, newData, switchUpdateProduct }) => {

    // console.log(newData);

    return (
        <div className="mainContainer">
            <div style={{textAlign: "right", margin: "10px 15px"}}>
                <button className="btn btn-primary mx-3 px-3" onClick={() => pagination("prev")}>Prev</button>
                <button className="btn btn-primary px-3" onClick={() => pagination("next")}>Next</button>
            </div>
            <div className="row">
                <div className="col-4">
                    <h3 className="header">Categories</h3>
                    <div className="listContainer" >
                        {category.map((item, index) => {
                            return(
                                <ul key={index}>
                                    <li onClick={() => {productDisplay(item)}}><span style={{width: "180px"}}>{item.categoryName}</span><NavLink to="/updateCategory"><i onClick={() => {switchUpdateCategory(item)}} class="fa fa-pencil-alt pencil"></i></NavLink><i onClick={() => {deleteCategory(item)}} className="fa fa-times"></i></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>

                <div className="col-8 cardData">
                    <AllProducts product={product} newData={newData} switchUpdateProduct={switchUpdateProduct} deleteProduct={deleteProduct}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
