const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use('/course', require("./routes/courseRoutes"));
const PORT = 5051 | process.env.PORT;

app.listen(PORT, () => {
    console.log("Server Listening on", PORT, "...");
    let mongoURI="mongodb://"+ process.env.MONGO_HOSTNAME + 
    ":" + process.env.MONGO_PORT +
     "/" + process.env.MONGO_DB;
    console.log("mongoURI"+mongoURI);
    mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
        console.log("Connected to DB !");
    }).catch((error) => {
        console.log("Connection to DB Failed !");
        console.log(error);
    });
});

