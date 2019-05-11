const router=require("express").Router()
const controllers =require("../controlador/routeController")

/**/
router.get("/",controllers.get);
router.get("/:id",controllers.get2);
router.post("/",controllers.post);
router.post("/delete/",controllers.delete);

router.post("/update/:id", controllers.put);
// ?id=valor req.query



module.exports=router;
