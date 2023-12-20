const express = require("express");
const dotenv = require('dotenv');
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyjokeRoutes = require("./routes/joke.routes");
AllMyjokeRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
