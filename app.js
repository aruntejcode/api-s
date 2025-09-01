import express from "express"
import dotenv from "dotenv"

dotenv.config();

const port=process.env.PORT

let app = express();

import adminRouter from "./controllers/admin/index.js";


app.use("/admin",adminRouter)

app.listen(port,()=>{
    console.log(`listeing to the port:${port}`)
});