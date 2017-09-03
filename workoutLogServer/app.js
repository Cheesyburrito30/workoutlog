const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./db.js')
const User = sequelize.import('./models/user')

User.sync() //sync({force: true}) //this drops table should we need to

app.use(bodyParser.json())//will parse code and then turn it into JSON

app.use(require('./middleware/headers'))

app.use('/api/test', function(req,res){
	res.send ('hello world')
})

app.listen(3000, function(){
	console.log('Listening 3000')
})
app.post('/api/user', function(req,res){
	let username= req.body.user.username;
	let pass = req.body.user.password;
	//Need to create User object and use sequelize to put it into the DB
	User.create({
		username: username,
		passwordhash: ""
	}).then(
	//Sequelize is going to return the object it created from DB
		function createSuccess(user){
			res.json({
				user: user,
				message: 'create'
			})
		},
		function createError(err) {
			res.send(500, err.message)
		}
	)

})