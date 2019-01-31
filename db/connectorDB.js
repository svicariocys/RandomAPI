// Proper way to initialize and share the Database object

// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
const cn = 'postgres://jugfndcqbzyppm:6ebf4d01f22eefdba0e876b0b6e5e8cb4ed859e4ee17273f89c15cd4d68708f1@ec2-54-221-253-228.compute-1.amazonaws.com:5432/d8ffu9pr1tolo';

// Creating a new database instance from the connection details:
const db = pgp(cn);



class ConnectorDB{
	static connect(){
		console.log(db);
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
  
}

module.exports = ConnectorDB;