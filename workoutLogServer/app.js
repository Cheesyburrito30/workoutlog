const express= require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, function(){
	console.log('Listening 3000')
})

app.use(require('./middleware/headers'))

app.use('/api/test', function(req,res){
	res.send ('hello world')
})

const Sequelize = require('sequelize')
const sequelize = new Sequelize('workoutlog', 'postgres', 'VlpCartel111', {
	host:'localhost',
	dialect: 'postgres'
})

sequelize.authenticate().then(
	function(){
		console.log('connected to workoutlog postgress db')
	},
	function(err){
		consol.log(err)
	}

)
//data model
let User = sequelize.define('user', {
	username: Sequelize.STRING,
	passwordhash: Sequelize.STRING,
})
//creates table in postgres
//

User.sync()
//User.sync({force: true}) this drops table should we need to
app.use(bodyParser.json())   //will parse code and then turn it into JSON

app.post('/api/user', function(req,res){
	let username= req.body.user.username;
	let pass = req.body.user.password;
	User.create({
		username: username,
		passwordhash: ""
	}).then(
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