const express = require("express");
const router = express.Router();
const clientControllers = require("../controllers/clientsControllers");

router.get("/clientes", clientControllers.getAllClients);
router.post("/addClient", clientControllers.addClient);
router.put("/dropClient/:ID", clientControllers.dropClient);
router.put("/upClient/:ID", clientControllers.upClient);
router.put("/updateClients", clientControllers.updateClients);
router.get("/getClientsByID/:ID", clientControllers.getClientsByID);

module.exports = router;
