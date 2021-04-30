import Table from "../table/Table";
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Card from "../cards/Card";
import axios from "axios";
import Data from '../viewTable/ViewTable';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  const [apiData, setApiData] = useState([])
  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    async function dataLoad() {

      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=16parkline=false')
      console.log(response.data);
      setApiData(response.data);
    }
  

    dataLoad();
    loadStockMarketData();
  }, [])

  async function loadStockMarketData() {
    const result = await axios.get('/getStockData');
    setViewData(result.data);
    console.log(result.data);

  }

  function addNewbutton(stockdata) {
    const addStockData = {
      name: stockdata.name,
      symbol: stockdata.symbol,
      market_cap: stockdata.market_cap,
      current_price: stockdata.current_price,
      isPurchased:false
    }
    axios.post('/savestockData', addStockData);
    loadStockMarketData();
  }
  async function removeData(dataitem) {
    const data = {
      _id: dataitem._id
    };
    const delresponse = await axios.delete("/deleteStockData", { data });
    loadStockMarketData();
  }

  return (
    <>
      <Router>
        <Navbar />
        <div className="container mb-5 pb-5">
          <Card />
          <Switch>
            <Route exact path="/" component={() => <Table apiData={apiData} viewData={viewData} addbutton={addNewbutton} />} />
            <Route exact path="/home" component={() => <Table apiData={apiData} viewData={viewData} addbutton={addNewbutton} />} />
            <Route exact path="/view" component={() => <Data deletebutton={removeData} viewData={viewData} />} />
          </Switch>
        </div>
      </Router>

    </>
  )
}

export default Home

