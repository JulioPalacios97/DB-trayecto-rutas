const router=require("express").Router()
const controllers =require("../controlador/brandController")

router.get("/",controllers.get);
router.get("/:id",controllers.get2);
router.post("/",controllers.post);

module.exports=router;