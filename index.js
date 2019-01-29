const express = require('express')
const ConnectorDB = require('./db/connectorDB')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	ConnectorDB.connect()
	.then(() => res.send('connected'))
	.catch(e => res.send('connection error', err.stack))
})



app.get('/participants', (req, res) =>{
	let data = 
		[
			{
				id: 0,
				name: "Sebastian",
				surname: "Vicario"
			},
			{
				id: 1,
				name: "Damian",
				surname: "Ramonas"
			}
			
		]
	res.send(data);
})

app.get('/random', (req, res) =>{
	let data = 
	{
		id: 0,
		name: "Sebastian",
		surname: "Vicario"
	}
	res.send(data);
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || 5000}!`))