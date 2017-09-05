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
const User = sequelize.import('./models/user')

module.exports = sequelize