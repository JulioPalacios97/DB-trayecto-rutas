const mydb=require("../bd/config").pool;
module.exports={
    get:(req,res)=>{
		mydb.query("SELECT * FROM units",(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send(result);
		})
	},
	get2:(req,res)=>{
		let id= req.params.id;
		mydb.query("SELECT * FROM units WHERE idunit = ?",[id],(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send(result);
		})
	},
	post:(req,res)=>{
		console.log(req.body)
		let name=req.body.brandName
		let model=req.body.model
		let licensePlate=req.body.licensePlate
		mydb.query("INSERT INTO units(brand,model,license_Plate) VALUES(?,?,?)",[name,model,licensePlate],(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send({msg:"Insertado"});
		});
	}

}