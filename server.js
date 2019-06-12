const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

const items = require('./routes/api/items')


//bodyparser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI

//connect to Mongo
mongoose.connect(db)
.then(()=> console.log('MONGO DB Connected'))
.catch(err => console.log(err))

// USER ROUTES
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`Server started on port: ${port}`))
