const express = require("express");
const Product = require("./model/model");
require("./connection/conn");

const app = express();
const port = process.env.PORT || 9000;

app.post("/addProduct", async (req, res) => {
    try {
        const productData = new Product({
            categoryId: req.body.cateoryId,
            categoryName: req.body.categoryName,
            productId: req.body.productId,
            categoryName: req.body.categoryName
        })

        const saveData = await productData.save();
        res.status(200).send(saveData);

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});