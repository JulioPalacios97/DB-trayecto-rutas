var  mysql=require("mysql2");
const access={
	host: "alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user:'zjrfisv29n8qowun',
	password:"bpe9hmpbdq2ywrrg",
	port:3306,
	database:"zhb296dftv2evvxe"
};

var db=mysql.createConnection(access);

exports.pool = db;