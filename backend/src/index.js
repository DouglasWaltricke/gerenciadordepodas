const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config()

const app = new express();

app.use(cors({origin:true,credentials:true}))

app.use(express.json())
app.use(routes)

app.listen(3333)
