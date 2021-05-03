const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log("Connection Error", err);
});