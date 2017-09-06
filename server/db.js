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
		console.log(err)
	}
)
const User = sequelize.import('./models/user')
const definition = sequelize.import('./models/definition')
const Log = sequelize.import('./models/log')

module.exports = sequelize