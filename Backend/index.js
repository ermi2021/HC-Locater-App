const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const hcRoute = require('./Routes/HealthCenter');
const pharmaRoute = require('./Routes/Pharmacy');

app.use('/ous', hcRoute);
app.use('/pharma', pharmaRoute);

app.listen(port, ()=> {
   console.log(`Server is running on port: ${port}`);
});

function authenticateToken(req,res,nex) {

}
