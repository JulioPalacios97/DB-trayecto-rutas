const mydb=require("../bd/config").pool;
module.exports={
	get:(req,res)=>{
		mydb.query("SELECT * FROM routes",(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send(result);
		})
	},
	get2:(req,res)=>{
		let id= req.params.id;
		mydb.query("SELECT * FROM routes WHERE idroute = ?",[id],(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send(result);
		})
	},
	post:(req,res)=>{
		console.log(req.body)
		let name=req.body.routeName
		let origin=req.body.origin
		let destiny=req.body.destiny
		mydb.query("INSERT INTO routes(route_name,origin,destination) VALUES(?,?,?)",[name,origin,destiny],(err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send({msg:"Insertado"});
		});
	},

	delete:(req,res) =>{
		let id= parseInt(req.body.id)
		mydb.query("DELETE FROM routes WHERE idroute = ?",[id],(err,result) =>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send({msg:"Eliminado"});
		})
	},
	put:(req,res)=>{
		let id = req.params.id;
		let name=req.body.routeName
		let origin=req.body.origin
		let destiny=req.body.destiny
		mydb.query("UPDATE routes SET route_name=?, origin=?, destination=? WHERE idroute=?",[name, origin, destiny, id], (err,result)=>{
			if(err){
				console.log(err);
				res.status(500).send({msg:"Error en el servidor"});
			}
			res.status(200).send({msg:"Actualizado"});
		})
	}

     

}