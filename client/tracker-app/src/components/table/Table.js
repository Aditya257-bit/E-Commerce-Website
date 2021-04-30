import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Pagination from '../pagination/Pagination';
import { NavLink } from 'react-router-dom';
import "./Table.css";

const Table = (props) => {

  const { apiData, viewData } = props;
  const [showPerPage, setShowPerPage] = useState(5)
  const [search, setSearch] = useState("")
  const [dataitem, setDataitem] = useState([]);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  })

  useEffect(() => {
    var temp = [];
    viewData.map(item =>
      temp.push(item.name)
    )
    setDataitem(temp);
  }, [])

  function onPaginationChange(start, end) {
    setPagination({ start: start, end: end })
  }


  return (
    <div className="table_styling">


    <div className="d-flex py-4">
      <h3 className=" my-2 mx-5">Stock Details Table</h3>
      <div className="searchContainer">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input className="inputField" type="text" placeholder="Search by Company Name" onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
    <table className="table">
      <thead className="thead-light text-center">
        <tr>
          <th scope="col">Company Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Market Cap</th>
          <th scope="col"></th>
          <th scope="col">Current price</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {apiData.filter((value) => {
          if (search === "") {
            return value;
          }
          else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        }).slice(pagination.start, pagination.end).map((stockdata, index) => {
          return <tr key={index}>
            <td>{stockdata.name}</td>
            <td><li className="symbol">{stockdata.symbol}</li></td>
            <td>{stockdata.market_cap}</td>
           
            {
          <td>{dataitem.includes(stockdata.name) ? <NavLink to="/view"><button className="viewBtn" onClick={() => { props.addbutton(stockdata) }}>View</button></NavLink> : <button className="saveData" onClick={() => { props.addbutton(stockdata) }}>Save Data</button>}</td>
        }
            <td>{stockdata.current_price}</td>
          </tr>
        })
        }
      </tbody>
    </table>
    <Pagination showPerPage={showPerPage} setShowPerPage={setShowPerPage} onPaginationChange={onPaginationChange} total={apiData.length} />
  </div>
  )
}

export default Table
