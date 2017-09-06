let router = require('express').Router()
let sequelize = require('../db')
let Log = sequelize.import('../models/user')
let Definition = sequelize.import('../models/definition')

router.post('/', function(req,res) {
	let description = req.body.log.description
	let result = req.body.log.result
	let user = req.user
	let definition= req.body.log.def

	Log
		.create({
			description: description,
			result:result,
			owner:owner,
			def: definition
		})
		.then(
			function createSuccess(log) {
				res.json(log)
			},
			function createError(err) {
				res.send(500, err.message)
			}
		)
})
router.get('/', function(req,res) {
	let userid = req.res.id
	Log
	.findAll({
		where: {owner: userid}
	})
	.then(
		function findAllSuccess(data){
			res.json(data)
		},
		function findAllError(err){
			res.send(500, err.message)
		}
	)
})
module.exports = router;