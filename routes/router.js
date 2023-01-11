const express = require("express");
const router = express.Router();
const homeController = require('./homeController');

router.get("/",homeController.accueil);
router.get("/personnages",homeController.cartes);
router.get("/creation", homeController.creation);
router.get("/defaut", homeController.defaut);
router.get("/rapport", homeController.rapport);



module.exports = router;