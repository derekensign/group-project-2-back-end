const express = require('express')
const app = express()
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const { userAuth } = require('./middlewears/userAuth');


const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())
app.use(userAuth)


app.use('/user', userRoutes);


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})

const businessRoutes = require('./routes/businessRoutes')

app.use('/business', businessRoutes)