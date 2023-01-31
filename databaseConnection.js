const mongoose = require('mongoose');

function DbConnection(){
    const DB_URL = process.env.MONGO_URI;  //toget env variable

    mongoose.connect(DB_URL,{
        useNewUrlParser:true,  //not specific importat but increase efficiency
        useUnifiedTopology : true,
    });
    //after establishing the connection, store the information about the connection in this db variable
    const db = mongoose.connection;  

    db.on("error", console.error.bind(console, "Connection error:"));
    db.once('open',function(){
        console.log("Db Connected...");
    });
    
}

module.exports = DbConnection;