const express = require('express')
const ConnectorDB = require('./db/connectorDB')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	ConnectorDB.connect()
	.then(result => {
		res.status(200).send('connected');
	})
	.catch(err => {
		res.status(404).send('connection error', err);
	})
})

app.get('/createPersonTable', (req, res) => {
	ConnectorDB.createPersonTable()
	.then(result => {
		console.log("success");
		res.status(200).send('connected');
	})
	.catch(err => {
		console.log("error creating person table",err);
		res.status(404).send('connection error', err.stack);
	})
})

app.get('/participants', (req, res) =>{
	ConnectorDB.getUsers()
	.then(result => {
		console.log(result);
		res.status(200).send('connected');
	})
	.catch(err => {
		console.log("error getusers",err);
		res.status(404).send('connection error', err.stack);
	})
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