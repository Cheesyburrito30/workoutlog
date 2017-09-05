require('dotenv').config()
const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./db')
const User = sequelize.import('./models/user')

//create table

User.sync() //sync({force: true}) //this drops table should we need to
// sequelize.sync()

app.use(bodyParser.json())//will parse code and then turn it into JSON

app.use(require('./middleware/headers'))
app.use(require('./middleware/validate-session'))
//creating a user
app.use('/api/user', require('./routes/user'))
//logging in
app.use('/api/login', require('./routes/session'))

app.use('/api/definition', require('./routes/definition'))
app.listen(3000, function(){
	console.log('Listening 3000')
})
