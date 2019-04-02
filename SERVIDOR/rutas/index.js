const router=require("express").Router()
const controllers =require("../controlador/routeController")

router.get("/",(req,res)=>{
	res.send("Hi");
})
/**/
router.get("/rutas",controllers.get);
router.get("/rutas/:id",controllers.get2);
router.post("/rutas/",controllers.post);
router.post("/rutas/delete/",controllers.delete);

router.post("/rutas/update/:id", controllers.put);
// ?id=valor req.query


module.exports=router;