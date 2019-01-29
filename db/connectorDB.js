const { Client } = require('pg')
const client = new Client({
  connectionString: 'postgres://jugfndcqbzyppm:6ebf4d01f22eefdba0e876b0b6e5e8cb4ed859e4ee17273f89c15cd4d68708f1@ec2-54-221-253-228.compute-1.amazonaws.com:5432/d8ffu9pr1tolo'
})

class ConnectorDB{
	static connect(){
    return client.connect();
  } 
}