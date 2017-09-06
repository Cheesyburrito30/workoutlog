module.exports = function(sequelize, DataTypes) {
	return sequlize.define('log', {
		description: DataTypes.STRING,
		result: DataTypes.STRING,
		owner: DataTypes.STRING,
		def: DataTypes.STRING
	},{
	})
}