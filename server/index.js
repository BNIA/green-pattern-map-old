var config = require(process.env.PWD + '/config.json')
var pg = require('knex')({client:'pg',connection:config.connection,pool:{min:0,max:7}})
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

//set it to use jade
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) //?
app.set('view engine', 'jade')

app.use('/',require('./landing'))
	.use('/app',express.static(process.env.PWD+ '/client/landing/'))
	.use('/node_modules',express.static(process.env.PWD+ '/node_modules'))

app.use('/map',require('./map')(pg))
	.use('/map/app',express.static(process.env.PWD+ '/client/map/'))
	.use('/map/node_modules',express.static(process.env.PWD+ '/node_modules'))


// app.get('/boundaries/:type', (req,res) => {
// 	var query = null
// 	if(req.params.type == 'csas'){
// 		query = pg.select(['gid','geojson']).from('boundaries.csas')
// 	}
// 	else if(req.params.type == 'nsas'){
// 		query = pg.select(['gid','geojson']).from('boundaries.nsas')
// 	}
// 	else if(req.params.type == 'subwatersheds'){
// 		query = pg.select(['gid','geojson']).from('boundaries.subwatersheds')
// 	}
// 	else{
// 		return res.json({err:'boundary not listed or not provided'})
// 	}
// 	if(req.query && req.query.filter){
// 		query = query.whereIn('gid',req.query.filter)
// 	}
// 	return query.then((data) => {
// 		return res.json(data)
// 	})
// })


app.listen(8080,() => {
	console.log("Listening on port 8080")
})
