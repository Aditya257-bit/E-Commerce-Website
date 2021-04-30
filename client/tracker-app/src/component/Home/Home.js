import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";

import LandingPage from "../LandingPage/LandingPage";
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';
import Products from '../Products/Products';

const Home = () => {

    const [apiData, setApiData] = useState([]);
    const [category, setCategory] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setApiData(response.data);
        }
        fetchData();
    }, []);

    console.log(category);

    const addProduct = ( item ) => {
        const productData = {
            categoryId: item.categoryId,
            categoryName: item.categoryName,
            productId: item.productId,
            productName: item.productName
        }

        axios.post("/addProduct", productData);
    }

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <LandingPage apiData={apiData} category={category}/> 
                </Route>
                <Route path="/product">
                    <Products addProduct={addProduct}/>
                </Route>
                <Route path="/category">
                    <Category setCategory={setCategory}/>
                </Route>
            </Switch>
        </Router>
    )
};

export default Home;