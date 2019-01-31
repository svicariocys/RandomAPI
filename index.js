const express = require('express')
const ConnectorDB = require('./db/connectorDB')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	ConnectorDB.connect()
	.then(result => {
		console.log("success");

		console.log(result);
		// res.status(200).send('connected');
	})
	.catch(err => {
		console.log("error connecting db",err);
		// res.status(500).send('connection error', err.stack);
	})
	res.send("trying to connect db")
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

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`))