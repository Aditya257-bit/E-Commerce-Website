import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import AllProducts from '../AllProducts/AllProducts';

const LandingPage = ({ apiData, category }) => {

    return (
        <div className="mainContainer">
            <div className="row">
                <div className="col-4">
                    <h3 className="header">Categories</h3>
                    <div className="listContainer">
                        {category.map((item, index) => {
                            <ul key={index}>
                                <li>{item.categoryId}</li>
                                <li>{item.categoryName}</li>
                            </ul>
                        })}
                    </div>
                </div>

                <div className="col-8 cardData">
                    <AllProducts apiData={apiData} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
