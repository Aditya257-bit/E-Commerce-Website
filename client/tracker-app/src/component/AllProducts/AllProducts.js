import React from 'react'
import "./AllProducts.css";

const AllProducts = ({ apiData }) => {
    return (
        <div style={{}}>
                {apiData.map((item) => {
                    return (
                        <div className="card" key={item.id} style={{ width: "18rem" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img className="card-img-top img"  src={item.image} />
                            </div>
                            <div className="card-body">
                                <p className="card-title"><span style={{ fontWeight: "bold" }}>Name:- </span>{item.title}</p>
                                {/* <p className="card-text"><span style={{fontWeight: "bold"}}>Description:- </span>{item.description}</p> */}
                                <p className="card-text"><span style={{ fontWeight: "bold" }}>Price:-</span> Rs.{item.price}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default AllProducts
