require('dotenv').config()
const express = require('express');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql');
const SQL = require('sql-template-strings')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.REACT_APP_CRYPTO);
const http = require("http").createServer(app);

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
const io = require("socket.io")(http, {
	cors: {
	  origin: process.env.REACT_APP_BASE_URL,
	  methods: ["GET", "POST"],
	  allowedHeaders: ["my-custom-header"],
	  credentials: true
	}
  });
  

io.on("connection", socket => {
	socket.on("disconnect", () => {
	  console.log("user disconnected");
	});
  
	socket.on("message", message => {
	  io.emit("message", message);
	  pool.getConnection(function(err, connection) {
		if (err) throw err; 
		const encryptedMessage = cryptr.encrypt(message.message);
		connection.query(
			"INSERT INTO messages (message, report_id, date, author) VALUES (?, ?, ?, ?)", [encryptedMessage, message.reportId, message.date, message.author],
			function (error) {
				connection.release();
				if (error) throw error;
			}
		);
	});
	});
  });
  app.get('/api/messages', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 

		connection.query(
			"SELECT * FROM messages WHERE report_id = ?", [req.query.reportId],
			function (error, results) {
				console.log(results)
				res.send(results.map((item) =>  ({
						message: cryptr.decrypt(item.message),
						author: item.author, 
						date: item.date
						
					})
					
				))
				connection.release();
				if (error) throw error;
			}
		);
	});
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
app.get('/api/login', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		// const encryptedPassword = cryptr.encrypt(req.query.password);

		connection.query
		("SELECT * FROM reports WHERE report_id = ? AND report_password = ?", [req.query.reportId, req.query.password ],
		function (error, results) {
			const dateAdded = results[0].date_added;
			const decryptedReportDetails = cryptr.decrypt(results[0].report_details);
			const decryptedReport = cryptr.decrypt(results[0].report);
			const reportId = results[0].report_id;
			const occurTime = results[0].occur_time;
			const state = results[0].state;

			res.send({
				"dateAdded": dateAdded,
				"reportDetails": decryptedReportDetails,
				"report": decryptedReport,
				"reportId": reportId,
				"occurTime": occurTime,
				"state": state
				
			})
				connection.release();
				if (error) throw error;
			}
		);
	});
});

app.get('/api/createreport', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err;
		const encryptedReport = cryptr.encrypt(req.query.report);
		const encryptedReportDetails = cryptr.encrypt(req.query.reportDetails);

			connection.query(
				"INSERT INTO reports (report, date_added, occur_time, report_details, report_id, report_password, org_id) VALUES (?, ?, ?, ?, ?, ?, ?)", [encryptedReport, req.query.dateAdded, req.query.occurTime, encryptedReportDetails, req.query.reportId, req.query.reportId, req.query.orgId],
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
http.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));

