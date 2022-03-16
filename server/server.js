import express from 'express';
import fs from "fs";
import cors from 'cors';
const morgan = require("morgan");
require("dotenv").config();

//create express app

const app= express();

//apply middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
a

//route
app.get('/',(req, res) => {
    res.send("you hit server endpoint");
} );

fs.readdirSync('./routes').map((r) =>
 app.use('/api',require(`./routes/${r}`))
 );

//port

const port = process.env.PORT || 22432;

app.listen(port ,() => console.log(`Server is running on  port ${port}`));