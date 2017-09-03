const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./db')

const User = sequelize.import(__dirname + '/models/user')

//create table

User.sync() //sync({force: true}) //this drops table should we need to

app.use(bodyParser.json())//will parse code and then turn it into JSON

app.use(require('./middleware/headers'))
app.use('/api/user', require('./routes/user'))
app.use('/api/login', require('./routes/session'))
app.use('/api/test', function(req,res){
	res.send ('hello world')
})

app.listen(3000, function(){
	console.log('Listening 3000')
})
