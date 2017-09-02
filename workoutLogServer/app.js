const express= require('express')
const app = express()

app.use(require('./middleware/headers'))

app.use('/api/test', function(req,res){
	res.send ('hello world')
})
app.listen(3000, function(){
	console.log('Listening 3000')
})
