var config = require('./config.json')
var pg = require('knex')({client:'pg',connection:config.connection})

var express = require('express')
var app = express()

//set it to use jade
app.set('view engine', 'jade')

app.use('/static', express.static('public'))

app.get('/', (req,res) => {
	res.render('index')
})

app.get('/test', (req,res) => {
	pg.select().from('boundaries.csas').where('gid',1)
		.then((data) => {
			res.send(data)
		})
})

app.listen(8080,() => {
	console.log("Listening on port 8080")
})
