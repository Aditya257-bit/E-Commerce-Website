import React from 'react'

const Products = ({ category, addProduct, setProduct, setProductInput, productInput}) => {

    const handleChange = (e) => {
        setProductInput((oldValue) => {
            return(
                {...oldValue, [e.target.name] : e.target.value}
            )
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setProduct((oldData) => {
        //     return [{...oldData, productInput}];
        // });
        addProduct();
    }

    return (
        <div>
            <div className="mx-5 mt-5 w-50">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Category ID :-</label>
                        <input type="text" className="form-control" onChange={handleChange} name="categoryId"  placeholder="Enter category id"/>
                    </div>
                    <div>
                        <label>Select Category :- </label>
                        <select style={{padding: "3px 16px"}} name="categoryName" onChange={handleChange}>
                            {category.map((item) => {
                                return(
                                    <option id="categoryName">{item.categoryName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Product ID :-</label>
                        <input type="text" className="form-control" onChange={handleChange} name="productId"  placeholder="Enter product id"/>
                    </div>
                    <div class="form-group">
                        <label>Product Name :-</label>
                        <input type="text" className="form-control" onChange={handleChange} name="productName" placeholder="Product name"/>
                    </div>
                    <div class="form-group">
                        <label>Product Price :-</label>
                        <input type="text" className="form-control" onChange={handleChange} name="productPrice" placeholder="Product price"/>
                    </div>
                    <div class="form-group">
                        <label>Description :-</label>
                        <input type="text" className="form-control" onChange={handleChange} name="productDescription" placeholder="Description"/>
                    </div>
                    <div class="input-group mb-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <label>Upload file :- </label>    
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" name="productImage" onChange={handleChange}/>
                            <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                        </div>
                        <div class="input-group-append">
                            <span class="input-group-text" >Upload</span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>  
        </div>
    )
}

export default Products;