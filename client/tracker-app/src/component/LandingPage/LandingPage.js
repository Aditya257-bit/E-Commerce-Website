import React from 'react'
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import AllProducts from '../AllProducts/AllProducts';

const LandingPage = ({ pages, product, category, deleteCategory, deleteProduct, switchUpdateCategory, productDisplay, newData, switchUpdateProduct }) => {

    // console.log(newData);

    return (
        <div className="mainContainer">
            {/* {pages.map((pageIndex) => {
                <button>{pageIndex + 1}</button>
            })} */}
            <div className="row">
                <div className="col-4">
                    <h3 className="header">Categories</h3>
                    <div className="listContainer">
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
