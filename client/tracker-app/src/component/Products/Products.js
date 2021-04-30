import React, { useState } from 'react'

const Products = ({addProduct}) => {

    const [product, setProduct] = useState({});

    const handleChange = (e) => {
        setProduct({[e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        addProduct(product);
    }

    return (
        <div>
            <div className="mx-5 mt-5 w-50">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Category ID :-</label>
                        <input type="text" className="form-control" onChange={handleChange} id="categoryId"  placeholder="Enter category id"/>
                    </div>
                    <div class="form-group">
                        <label>Category Name :-</label>
                        <input type="text" className="form-control" onChange={handleChange} id="categoryName" placeholder="Category name"/>
                    </div>
                    <div className="form-group">
                        <label>Product ID :-</label>
                        <input type="text" className="form-control" onChange={handleChange} id="productId"  placeholder="Enter product id"/>
                    </div>
                    <div class="form-group">
                        <label>Product Name :-</label>
                        <input type="text" className="form-control" onChange={handleChange} id="productName" placeholder="Product name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>  
        </div>
    )
}

export default Products;