require('dotenv').config()
const express = require('express');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql');
const SQL = require('sql-template-strings')

app.use(sslRedirect());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

const pool = mysql.createPool({
	host: process.env.REACT_APP_DATABASE_HOST,
	user: process.env.REACT_APP_DATABASE_USERNAME,
	password: process.env.REACT_APP_DATABASE_PASSWORD,
	database: process.env.REACT_APP_DATABASE
});

app.get('/api/organisation', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		connection.query
		("SELECT * FROM organisations WHERE org_name = ?", [req.query.orgName],
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});
});


app.get('/api/createreport', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`INSERT INTO reports (report, date_added, occur_time, report_description, report_id, org_id) VALUES (${req.query.report},${req.query.dateAdded},${req.query.occurTime},${req.query.details},${req.query.reportId},${req.query.orgId})`	
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});
});

app.get('/api/organisations', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`SELECT * FROM organisations`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});
});





  app.get('/api', (req, res) => {
	  res.send("API working");
	  
  });
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));

