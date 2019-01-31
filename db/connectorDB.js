const pgp = require('pg-promise')({
    // Initialization Options
})

// Preparing the connection details:
const cn = 'postgres://jugfndcqbzyppm:6ebf4d01f22eefdba0e876b0b6e5e8cb4ed859e4ee17273f89c15cd4d68708f1@ec2-54-221-253-228.compute-1.amazonaws.com:5432/d8ffu9pr1tolo';

// Creating a new database instance from the connection details:
const db = pgp(cn);

class ConnectorDB{
	static connect(){
		return db.proc('version');
  }

  static getUsers(){
  	db.any('SELECT * FROM users WHERE status = $1', ['active'])
    .then(data => {
        console.log('DATA:', data);
    })
    .catch(error => {
        console.log('ERROR:', error);
    });
  }

  static createPersonTable(){
    return db.query([`CREATE TABLE Person(
         id serial PRIMARY KEY,
         name VARCHAR (50) NOT NULL,
         surname VARCHAR (50) NOT NULL,
         email VARCHAR (355) UNIQUE NOT NULL,
         created_on TIMESTAMP NOT NULL,
         last_login TIMESTAMP
        )`]);
  }
  
}

module.exports = ConnectorDB;