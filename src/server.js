import express from "express";
import initWebRoutes from "./routes/web";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

// get PORT from .env, if still define, use 8080
const PORT = process.env.PORT || 8080;
const app = express();

//config new engine
configViewEngine(app);
//init web routes
initWebRoutes(app);

app.listen( PORT,() => {
    console.log(`Example app listening on port ${PORT}`)
  })