var config = require('./config.json')
var pg = require('knex')({client:'pg',connection:config.connection})

var express = require('express')
var app = express()

//set it to use jade
app.set('view engine', 'jade')

app.use('/static', express.static('public'))

app.get('/', function(req,res){
	res.render('index')
})

app.get('/test', function(req,res){
	pg.select().from('boundaries.csas').where('gid',1)
		.then(function(data){
			res.send(data)
		})
})

app.listen(8080, function(){
	console.log("Listening on port 8080")
})