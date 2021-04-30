const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Product", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log("Connection Error", err);
});