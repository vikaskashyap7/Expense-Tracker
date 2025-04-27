require('dotenv').config();
const express = require('express');
const database = require("./config/database");
const cors = require('cors');


const app = express();
app.use(express.json());

const expenseRoutes= require("./routes/expenseRoutes")


app.use(cors());

//database connect
database.connect();


app.use('/api', expenseRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 😁`));
