let router = require('express').Router()
let sequelize = require('../db.js')
let User = sequelize.import ('../models/user.js')
let Definition = sequelize.import('../models/definition.js')

router.post("/", function(req,res){
	//variables
		let description = req.body.definition.desc
		let logType = req.body.definition.type
		let owner = req.user.id
	//methods
	definition
		.create({description: description, logType: logType ,owner: owner})
		.then(
			//createSuccess function
			function createSuccess(definition){
				res.json({
					definition:definition
				})
			},
			function createError(err) {
				res.send(500, err.message)
			}
			//createError function
		)
})
router.get('/', function(req, res){
	let userid = req.user.id;
	Definition
	//find all by owner method
	.findAll({
		where: {owner:userid}
	})
	.then(
		//success
		function findAllSuccess(data) {
			//console.log(data)
			res.json(data)
		},
		//fail
		function findAllError(err) {
			res.send(500,err.message)
		}
	)
})
module.exports = router