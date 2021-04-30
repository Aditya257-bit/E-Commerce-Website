import React, { useState } from 'react';

const Category = ({setCategory}) => {

    const [details, setDetails] = useState([
        {categoryId: ""},
        {categoryName: ""}
    ]);

    const handleChange = (e) => {
        setDetails({...details, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategory(details);
        // console.log(details);
    }
    
    return (
        <div className="mx-5 mt-5 w-50">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category ID :-</label>
                    <input type="text" className="form-control" id="categoryId" onChange={handleChange}  placeholder="Enter category id"/>
                </div>
                <div class="form-group">
                    <label>Category Name :-</label>
                    <input type="text" className="form-control" id="categoryName" onChange={handleChange} placeholder="Category name"/>
                </div>
                <button type="submit" className="btn btn-primary">Add Category</button>
            </form>
        </div>
    )
}

export default Category;