var  mysql=require("mysql2");
const access={
	host: "localhost",
	user:'root',
	password:"julioc97",
	port:3307,
	database:"juliodb"
};

var db=mysql.createConnection(access);

exports.pool = db;