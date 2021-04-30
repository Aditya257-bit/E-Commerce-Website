import React, { useState,useEffect } from 'react';
import "./Pagination.css";

const Pagination = ({showPerPage, onPaginationChange,total}) => {
    const[counter,setCounter]=useState(1)

    useEffect(() => {

        const value = showPerPage * counter;
        onPaginationChange(value-showPerPage, value)
      
    }, [counter]);

    function onButtonClick(type){
        if(type==="prev"){
            if(counter===1){

                setCounter(1)
            }
            else{
                setCounter(counter-1)
            }
        }
        else if(type==="next"){
            if(Math.ceil(total/showPerPage)===counter){
                setCounter(counter)
            }
        else{
            setCounter(counter+1);
        }    
    }
}

    return (
            <div className="buttons">
            <span>{counter}</span>
                <button className="prev_btn" onClick={()=>onButtonClick("prev")}><i className="fa fa-less-than"></i></button>
                <button className="next_btn" onClick={()=>onButtonClick("next")}><i className="fa fa-greater-than"></i></button>
            </div>
    )
}

export default Pagination;