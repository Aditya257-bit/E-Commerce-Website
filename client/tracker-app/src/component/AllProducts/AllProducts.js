import React from 'react';
import {NavLink} from "react-router-dom"
import "./AllProducts.css";

const AllProducts = ({ product, deleteProduct, newData, switchUpdateProduct }) => {

    console.log(newData);
    let data = "";

    if(newData.length !== 0){
        data = newData;
    }
    else{
        data = product;
    }

    // const datas = newData.length ? (
        const datas = data.length !== 0 ? (
            data.map((item, index) => {
                return (
                    <div key={index} className="card" key={item.productId} style={{ width: "18rem", marginTop: "80px" }}>
                        <div className="card-body">
                            <div>
                                <p className="card-title"><span style={{ fontWeight: "bold" }}>Category ID:- </span>{item.categoryId}</p>
                                <p className="card-title"><span style={{ fontWeight: "bold" }}>Category Name:- </span>{item.categoryName}</p>
                                <p className="card-title"><span style={{ fontWeight: "bold" }}>Product ID:- </span>{item.productId}</p>
                                <p className="card-title"><span style={{ fontWeight: "bold" }}>Product Name:- </span>{item.productName}</p>
                            </div>
                            <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "10px"}}>
                                <button onClick={() => {deleteProduct(item) }} className="btn btn-danger">Delete</button>
                                <NavLink to="/updateProduct"><button onClick={() => {switchUpdateProduct(item)}} className="btn btn-primary">Update</button></NavLink>
                            </div>
                        </div>
                    </div>
                )
        })
    ) : (
        <p>No Product present of this Category</p>
    )

    return(
        <>
            <div className="product" style={{marginTop: "20px", display:"flex", flexDirection: "column"}}>
                <h2 style={{  textDecoration: "underline", marginLeft: "230px"}}>Products</h2>
                <div className="style">
                    {datas}
                </div>
            </div>
        </>
    )
}

export default AllProducts
