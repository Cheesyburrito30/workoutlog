const router = require('express').Router()
const sequelize = require('../db.js')
const User = sequelize.import('../models/user')

router.post('/', function(req,res){
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
module.exports=router