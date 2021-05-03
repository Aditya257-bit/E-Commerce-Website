import React from 'react';
import {NavLink} from "react-router-dom"
import "./AllProducts.css";

const AllProducts = ({ product, deleteProduct, newData, switchUpdateProduct }) => {

    // console.log(newData);

    const datas = newData.length ? (
        newData.map((item, index) => {
            return (
                <div key={index} className="card" key={item.productId} style={{ width: "18rem", marginTop: "80px" }}>
                    {/* <div style={{ display: "flex", justifyContent: "center" }}>
                        <img className="card-img-top img" alt="Image"  src={item.productImage} />
                    </div> */}
                    <div className="card-body">
                        <div>
                            <p className="card-title"><span style={{ fontWeight: "bold" }}>Product ID:- </span>{item.productId}</p>
                            <p className="card-title"><span style={{ fontWeight: "bold" }}>Product Name:- </span>{item.productName}</p>
                            <p className="card-title"><span style={{ fontWeight: "bold" }}>Category ID:- </span>{item.categoryId}</p>
                            <p className="card-title"><span style={{ fontWeight: "bold" }}>Category Name:- </span>{item.categoryName}</p>
                            {/* <p className="card-text"><span style={{fontWeight: "bold"}}>Description:- </span>{item.productDescription}</p>
                            <p className="card-text"><span style={{ fontWeight: "bold" }}>Price:-</span> Rs.{item.productPrice}</p> */}
                        </div>
                        <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "10px"}}>
                            <button onClick={() => {deleteProduct(item) }} className="btn btn-primary">Delete</button>
                            <NavLink to="/updateProduct"><button onClick={() => {switchUpdateProduct(item)}} className="btn btn-danger">Update</button></NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <p>No Product present of this Category</p>
    )

    return(
        <div style={{marginTop: "20px"}}>
            <h2 style={{textAlign: "center", textDecoration: "underline"}}>Products</h2>
            {datas}
        </div>
    )
}

export default AllProducts
