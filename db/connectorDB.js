const pgp = require('pg-promise')({
    // Initialization Options
})

// Preparing the connection details:
const cn = 'postgres://zzzyxtjhynzerx:bbae88c89b5d73923ff721b283d5f7bf6e96529a9ae63942aeb21596fbbfcc3d@ec2-54-225-121-235.compute-1.amazonaws.com:5432/dekuiihfgs8d4s';

// Creating a new database instance from the connection details:
const db = pgp(cn);

class ConnectorDB{
	static connect(){
		return db.proc('version');
  }

  static getUsers(){
  	return db.any('SELECT * FROM Person');
  }
  
}

module.exports = ConnectorDB;