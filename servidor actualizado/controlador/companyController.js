const mydb=require("../bd/config").pool;
module.exports={
    get:(req,res)=>{
		mydb.query("SELECT * FROM companies",(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send(result);
		})
	},
	get2:(req,res)=>{
		let id= req.params.id;
		mydb.query("SELECT * FROM companies WHERE idcompany = ?",[id],(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send(result);
		})
	},
	post:(req,res)=>{
		console.log(req.body)
		let name=req.body.companyName
		let address=req.body.address
		let telephone=req.body.telephone
		mydb.query("INSERT INTO companies(company_name,address,telephone) VALUES(?,?,?)",[name,address,telephone],(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send({msg:"Insertado"});
		});
	}

}
	