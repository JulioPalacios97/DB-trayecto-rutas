const router=require("express").Router()
const controllers =require("../controlador/companyController")

router.get("/",controllers.get);
router.get("/:id",controllers.get2);
router.post("/",controllers.post);

module.exports=router;
