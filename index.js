const express = require("express");

const app = express();

const PORT = 8081;

 app.use(express.json());

 app.get("/", (request, response) =>{
    response.status(200).json({
        message:"Server is up and running",
    });
 });

 app.get("*",(request, response) =>{
    response.status(500).json({
        message:"This route does not exist",
    });
 });
 app.listen(PORT, () =>{
    console.log(`Server is runing at port ${PORT}`);
 });