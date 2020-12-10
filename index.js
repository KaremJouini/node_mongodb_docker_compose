const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use('/course', require("./routes/courseRoutes"));
const PORT = 5051 | process.env.PORT;

const environment = require("./environment");
app.listen(PORT, () => {
    console.log("Server Listening on", PORT, "...");
    let mongoURI="mongodb://"+ environment.MONGO_HOSTNAME + 
    ":" + environment.MONGO_PORT +
     "/" + environment.MONGO_DB;
    console.log(mongoURI);
    mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
        console.log("Connected to DB !");
    }).catch((error) => {
        console.log("Connection to DB Failed !");
        console.log(error);
    });
});

