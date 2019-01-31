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
		res.status(200).send({participants: result});
	})
	.catch(err => {
		console.log("error getusers",err);
		res.status(404).send('connection error', err.stack);
	})
})

app.get('/random', (req, res) =>{
	ConnectorDB.getUsers()
	.then(result => {
		let participant = result[Math.floor(Math.random() * result.length)];
		res.status(200).send(participant);
	})
	.catch(err => {
		console.log("error getusers",err);
		res.status(404).send('connection error', err.stack);
	})
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`))